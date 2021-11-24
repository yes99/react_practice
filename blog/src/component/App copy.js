import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import Proptypes from "prop-types";



const foodILike = [
  {
    id : 1,
    name: "Kimchi",
    image : "https://thumb.mt.co.kr/06/2009/04/2009042416153570569_1.jpg/dims/optimize/",
    rating : 3.0
  },
  {
    id : 2,

    name: "hansot",
    image : "https://thumb.mt.co.kr/06/2009/04/2009042416153570569_1.jpg/dims/optimize/",
    rating : 3.0
  },
  {
    id : 3,

    name: "bibim",
    image : "https://thumb.mt.co.kr/06/2009/04/2009042416153570569_1.jpg/dims/optimize/",
    rating : 3.0
  },
  {
    id : 4,

    name: "aaaaa",
    image : "https://thumb.mt.co.kr/06/2009/04/2009042416153570569_1.jpg/dims/optimize/",
    rating : 3.0
  },
  {
    id : 5,

    name: "bbbbb",
    image : "https://thumb.mt.co.kr/06/2009/04/2009042416153570569_1.jpg/dims/optimize/",
    rating : 3.0
  },
]

function renderFood(dish){
  console.log()
  return <Food name = {dish.name} picture= {dish.image}/>
}


function Food({name, picture, rating}){
  return (
    <div>
    <h1>I like {name} </h1>
    <h4>{rating}/5</h4>
    <img src={picture} alt={name}/>
  </div>
  );
}

Food.propTypes = {
  name : Proptypes.string.isRequired,
  picutre : Proptypes.string.isRequired,
  rating : Proptypes.number.isRequired

}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>    
    
  );
}

export default App;
