import React, { Component } from 'react';
import './ButtonsContainer.css';
import ButtonsDouble from './ButtonsDouble/ButtonsDouble';

class ButtonsContainer extends Component {
  render(){
    return (
      <div className="ButtonsContainer">
        <ButtonsDouble buttonsDoubleValue = {this.props.buttonsContainerValue.buttonsDouble0} changeCounterMethod = {this.props.changeCounterMethod}/>
        <ButtonsDouble buttonsDoubleValue = {this.props.buttonsContainerValue.buttonsDouble1} changeCounterMethod = {this.props.changeCounterMethod}/>
        <ButtonsDouble buttonsDoubleValue = {this.props.buttonsContainerValue.buttonsDouble2} changeCounterMethod = {this.props.changeCounterMethod}/>
      </div>
    );
  }
}

export default ButtonsContainer;