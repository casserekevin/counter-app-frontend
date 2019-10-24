import React, { Component } from 'react';
import './ButtonsDouble.css';
import Button from './Button/Button';

class ButtonsDouble extends Component {
  render(){
    return (
      <div className="ButtonsDouble">
        <Button buttonValue = {this.props.buttonsDoubleValue.buttonValueLeft} changeCounterMethod = {this.props.changeCounterMethod}/>
        <Button buttonValue = {this.props.buttonsDoubleValue.buttonValueRight} changeCounterMethod = {this.props.changeCounterMethod}/>
      </div>
    );
  }
}

export default ButtonsDouble;