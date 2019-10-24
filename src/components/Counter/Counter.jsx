import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  render(){
    return (
      <div className="Counter">
        {this.props.counterValue}
      </div>
    );
  }
}

export default Counter;