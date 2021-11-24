import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import Proptypes from "prop-types";
import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    count : 0
  };

add = () => {
  console.log("add");
  this.setState(current =>({count : current.count + 1}));
};
minus = () => {
  console.log("minus");
  this.setState(current =>({count : current.count - 1}));
};
 // setstate부를때마다, rendering 을 계속 다시 할 것이다.


  render() {
    return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
