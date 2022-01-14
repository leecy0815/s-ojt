import { Component } from "react";
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

const lhd = '[App]';

class App extends Component {
  render() {
    console.log(`${lhd} render()`);
    return (
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about"  component={About}/>
        <Route path="/movie-detail" component={Detail}/>
      </HashRouter>
    );
  }
  // state = {
  //   isLoading: true,
  //   movies: [],
  // };

  // componentDidMount() {
  //   console.log('[App] componentDidMount()');
  //   // 영화 데이터 로딩!
  //   this.getMovieList();
  //   // setTimeout(() => {
  //   //   this.setState({ isLoading: false });
  //   // }, 1000 * 6);
  // }

  // async getMovieList() {
  //   console.log('[App] << start get movie list');
  //   const movies = await axios.get(MOVIE_LIST_URL)
  //     .then((response) => {
  //       const resData = response.data;
  //       return {
  //         result: true,
  //         data: resData.data.movies,
  //       };
  //     })
  //     .catch((error) => {
  //       console.error(`${lhd} >> scan't read movie list. error [${error.toString()}]`);
  //       return {
  //         result: false,
  //         data: [],
  //       };
  //     });

  //     if (!movies.result) {
  //       console.error('[App] >> failed to read movie list.');
  //       return;
  //     }

  //     console.log('[App] >> success to read movie list');
  //     this.setState({
  //       isLoading: false,
  //       movies: movies.data,
  //     });
  // }

  
  // render() {
  //   console.log('[App] render()');
  //   const {
  //     isLoading,
  //     movies,
  //   } = this.state;

  //   return (
  //     <section className="container">
  //       {
  //         isLoading ? 
  //           (
  //             <div className="loader">
  //               <span className="loader_text">Loading...</span>
  //             </div>
  //           ) : (
  //             <div className="movies">
  //               {
  //                 movies.map((movie) => {
  //                   return (
  //                   <Movie
  //                     key={movie.id}
  //                     title={movie.title}
  //                     year={movie.year}
  //                     summary={movie.summary}
  //                     poster={movie.medium_cover_image}
  //                     genres={movie.genres}
  //                   />
  //                   );
  //                 })
  //               }
  //             </div>
  //           )
  //       }
  //     </section>
  //   );
  // }
}

// import { Component } from "react";

// class App extends Component {
//   // (Life Cycle) 생성자
//   constructor(props) {
//     super(props);
//     console.log('[App] constructor()');
//   }

//   // (Life Cycle) 최초 화면을 rendering 이후 호출
//   componentDidMount() {
//     console.log('[App] componentDidMount()');
//   }

//   // (Life Cycle) 변경된 화면을 rendering 이후 호출
//   componentDidUpdate() {
//     console.log('[App] componentDidUpdate()');
//   }

//   // (Life Cycle) 화면이 사라지기 직전에 호출
//   componentWillUnmount() {
//     console.log('[App] componentWillUnmount()');
//   }

//   state = {
//     number: 1,
//     count: 0,
//   };

//   add = () => {
//     this.setState((current) => ({
//       count: current.count + current.number,
//     }));
//   };

//   minus = () => {
//     this.setState((current) => ({
//       count: current.count - current.number,
//     }));
//   };

//   resetNumber = () => {
//     this.setState({ count: 0, number: 1 });
//   }

//   setNumber = (e) => {
//     const number = Number(e.target.value);
//     this.setState({ number })
//   }

//   // (Life Cycle) render
//   render() {
//     console.log('[App] render()');
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>+</button>
//         <button onClick={this.minus}>-</button>
//         <button onClick={this.resetNumber}>reset</button>
//         <input onChange={this.setNumber} type="number"/>
//       </div>
//     );
//   }
// }
// import propTypes from "prop-types";

// class Food extends Component {
//   render() {
//     const {
//       name,
//       image,
//       rating,
//     } = this.props

//     const width = 700,
//           height = 500;

//     const divStyle = {
//       display: 'block',
//       align: 'center',
//     };

//     const result = 
//     <div style={divStyle}>
//       <h3>I like {name}</h3>
//       <h4>{rating}/5.0</h4>
//       <img height={height} width={width} src={image} alt={name}/>
//     </div>;

//     return result;
//   };
// }

// Food.propTypes = {
//   name: propTypes.string.isRequired,
//   image: propTypes.string.isRequired,
//   rating: propTypes.string.isRequired,
// };

// class App extends Component {
//   render () {
//     const foods = [
//       {
//         name: 'Kimchi',
//         image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
//         rating: "5.0",
//       },
//       {
//         name: 'Samgyeopsal',
//         image: 'https://src.hidoc.co.kr/image/lib/2021/8/27/1630049987719_0.jpg',
//         rating: "4.5",
//       },
//       {
//         name: 'Chukumi',
//         image: 'https://blog.kakaocdn.net/dn/dh9Dqr/btqzsWLoYqY/KgEhm09QyxfW29QfeWlkWk/img.png',
//         rating: "4.8",
//       },
//       {
//         name: 'Donkasu',
//         image: 'https://recipe1.ezmember.co.kr/cache/recipe/2019/01/12/b9343d314206275c1b6d0d0c4fcc2ce71.jpg',
//         rating: "3.1",
//       },
//       {
//         name: 'Gimbap',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Gimbap_%28pixabay%29.jpg',
//         rating: "4.0"
//       }
//     ];

//     // const renderFood = (food, idx) => {
//     //   return (
//     //     <Food key={idx} name={food.name} image={food.image}/>
//     //   );
//     // }

//     // console.log(foods.map(renderFood));
//     return (
//       <div>
//         <h1>Hello</h1>
//         {
//           foods.map((food, idx) => (
//             <div key={idx + 1}>
//               <Food name={food.name} image={food.image} rating={food.rating}/>
//               <br></br>
//             </div>
//           ))
//         }
//       </div>
//     );
//   };
// }

export default App;
