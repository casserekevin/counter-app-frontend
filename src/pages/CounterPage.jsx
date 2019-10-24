import React, { Component } from 'react';
import './CounterPage.css';
import Counter from '../components/Counter/Counter';
import ButtonsContainer from '../components/ButtonsContainer/ButtonsContainer';
import ButtonReset from '../components/ButtonReset/ButtonReset';

class CounterPage extends Component {
    constructor(){
        super()
        this.state = {
            buttonsContainer: {
                buttonsDouble0: {
                    buttonValueLeft: 1,
                    buttonValueRight: -1,
                },
                buttonsDouble1: {
                    buttonValueLeft: 5,
                    buttonValueRight: -5,
                },
                buttonsDouble2: {
                    buttonValueLeft: 10,
                    buttonValueRight: -10,
                }
            },

            counter: 0
        }

        //binds
        this.changeCounter = this.changeCounter.bind(this)
        this.resetCounter = this.resetCounter.bind(this)
    }

    render(){
        return (
        <div className="CounterPage">
            <ButtonsContainer buttonsContainerValue = {this.state.buttonsContainer} changeCounterMethod = {this.changeCounter}/>
            <Counter counterValue = {this.state.counter}/>
            <ButtonReset resetCounterMethod = {this.resetCounter}/>
        </div>
        );
    }

    changeCounter(value){
        this.setState((prevState) => {
            return {counter: prevState.counter + value}
        })
    }

    resetCounter(){
        this.setState(() => {
            return {counter: 0}
        })
    }
}

export default CounterPage;