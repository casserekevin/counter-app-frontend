import React, { Component } from 'react';
import './ButtonReset.css';

class ButtonReset extends Component {
  render(){
    return (
      <button className="ButtonReset" onClick = {() => this.props.resetCounterMethod()}>
        Reset
      </button>
    );
  }
}

export default ButtonReset;