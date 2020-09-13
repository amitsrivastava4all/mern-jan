import React from 'react';
export class Calc extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter:0};
    }
    plus(){
        let result = this.state.counter;
        result++;
        this.setState({counter:result});
    }
render(){
    return (
        <div data-test='comp-calc-div'>
            <p data-test='comp-calc-p'>{this.state.counter}</p>
            <button onClick={this.plus.bind(this)} data-test='comp-calc-button'></button>
        </div>
    )
}
}