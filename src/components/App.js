import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
    this.state={
      msg : ''
    }
	};

  buttonClickHandler = () =>{
    this.setState({msg : "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"})
  }
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
    		 <p id="para">{this.state.msg}</p>
         <button id="click" onClick={this.buttonClickHandler}>click</button>
        </div>
    	);
    }
}


export default App;

