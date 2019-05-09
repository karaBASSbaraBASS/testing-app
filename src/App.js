import React from 'react';
import Congrats from './Congrats';
import './App.css';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.handledecrementClick = this.handledecrementClick.bind(this); 
  //   this.handleIncrementClick = this.handleIncrementClick.bind(this); 
    
  //   this.state = {
  //     counter: 0,
  //     error: 0
  //   };
  // };
  // errorCheker() {
  //   this.state.counter < 0 ? this.setState({error: 1}) : this.setState({error: 0});
  // }
  // handledecrementClick(){
  //   this.setState({
  //     counter: this.state.counter - 1
  //   }, ()=>{this.errorCheker()})    
  // };
  // handleIncrementClick(){
  //   this.setState({
  //     counter: this.state.counter + 1
  //   }, ()=>{this.errorCheker()});
  // };
  render() {
    return (
      <div data-test="component-app">
        <Congrats/>
      </div>
    );
  }
}

export default App;
