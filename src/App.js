import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handledecrementClick = this.handledecrementClick.bind(this); 
    this.handleIncrementClick = this.handleIncrementClick.bind(this); 
    
    this.state = {
      counter: 0,
      error: 0
    };
  };
  errorCheker() {
    this.state.counter < 0 ? this.setState({error: 1}) : this.setState({error: 0});
  }
  handledecrementClick(){
    this.setState({
      counter: this.state.counter - 1
    }, ()=>{this.errorCheker()})    
  };
  handleIncrementClick(){
    this.setState({
      counter: this.state.counter + 1
    }, ()=>{this.errorCheker()});
  };
  render() {
    return (
      <div data-test="component-app">
        <div className="textWrapper">
          <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
          <span data-test="errorMsg" className={ "error" + (this.state.error ? ' show' : ' hidden')}>counter cant go below zero</span>
        </div>
        <button 
          data-test="increment-button" 
          onClick={this.handleIncrementClick}
          >
            Increment Counter
        </button>
        <button
          data-test="decrement-button"
          onClick={this.handledecrementClick}
          disabled={this.state.error}
        >
          Decrement Count
        </button>
      </div>
    );
  }
}

export default App;
