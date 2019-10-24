import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render(){
    if(this.props.buttonValue >= 0){
      return (
        <button className="Button" onClick = {() => this.props.changeCounterMethod(this.props.buttonValue)}>
          +{this.props.buttonValue}
        </button>
      );
    }
    else{
      return (
        <button className="Button" onClick = {() => this.props.changeCounterMethod(this.props.buttonValue)}>
          {this.props.buttonValue}
        </button>
      );
    }
  }
}

export default Button;