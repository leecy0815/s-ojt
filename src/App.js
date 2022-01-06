import { Component } from "react";

class App extends Component {
  state = {
    number: 1,
    count: 0,
  };

  add = () => {
    this.setState((current) => ({
      count: current.count + current.number,
    }));
  };

  minus = () => {
    this.setState((current) => ({
      count: current.count - current.number,
    }));
  };

  resetNumber = () => {
    this.setState({ count: 0, number: 1 });
  }

  setNumber = (e) => {
    const number = Number(e.target.value);
    this.setState({ number })
  }

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.resetNumber}>reset</button>
        <input onChange={this.setNumber} type="number"/>
      </div>
    );
  }
}
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
