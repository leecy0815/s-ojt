import { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie.js";
import './Home.css';

const lhd = '[Home]';
const MOVIE_LIST_URL = 'https://yts-proxy.now.sh/list_movies.json?sort_by=like_count';

class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    console.log(`${lhd} componentDidMount()`);
    // 영화 데이터 로딩!
    this.getMovieList();
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 1000 * 6);
  }

  async getMovieList() {
    console.log(`${lhd} << start get movie list`);
    const movies = await axios.get(MOVIE_LIST_URL)
      .then((response) => {
        const resData = response.data;
        return {
          result: true,
          data: resData.data.movies,
        };
      })
      .catch((error) => {
        console.error(`${lhd} >> scan't read movie list. error [${error.toString()}]`);
        return {
          result: false,
          data: [],
        };
      });

      if (!movies.result) {
        console.error(`${lhd} >> failed to read movie list.`);
        return;
      }

      console.log(`${lhd} >> success to read movie list`);
      this.setState({
        isLoading: false,
        movies: movies.data,
      });
  }

  
  render() {
    console.log(`${lhd} render()`);
    const {
      isLoading,
      movies,
    } = this.state;

    return (
      <section className="container">
        {
          isLoading ? 
            (
              <div className="loader">
                <span className="loader_text">Loading...</span>
              </div>
            ) : (
              <div className="movies">
                {
                  movies.map((movie) => {
                    return (
                    <Movie
                      key={movie.id}
                      title={movie.title}
                      year={movie.year}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                    />
                    );
                  })
                }
              </div>
            )
        }
      </section>
    );
  }
}

export default Home;
