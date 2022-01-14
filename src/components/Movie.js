import { Component } from "react";
import propTypes from "prop-types";
import './Movie.css'
import { Link } from "react-router-dom";

class Movie extends Component {
    render() {
        const {
            title,
            year,
            summary,
            poster,
            genres,
        } = this.props;

        return (
            <div className="movie">
                <Link to={{
                    pathname: '/movie-detail',
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres,
                    }
                }}>
                    <img src={poster} alt={title} title={title}/>
                    <div className="movie_data">
                        <h3 className="movie_title">
                            {title}
                        </h3>
                        <h5 className="movie_year">{year}</h5>
                        <ul className="movie_genres">
                            {
                                genres.map((genre, idx) => {
                                    return (
                                        <li key={idx} className="movie_genres">
                                            {genre}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        <p className="movie_summary">
                            {summary.length > 180 ? summary.slice(0, 180) + '...' : summary}
                        </p>
                    </div>
                </Link>
            </div>
        );
    }
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;