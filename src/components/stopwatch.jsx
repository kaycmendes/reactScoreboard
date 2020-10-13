import React, { Component } from 'react';

export default class Stopwatch extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            elapsedTime: 0,
            previousTime: 0
        };
    }


    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.tick()
        }, 1000) 
    }

    tick = () => {
        if(this.state.isRunning){
            const now = Date.now()
            this.setState(prevState => ({
                previousTime: now,  
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }))
        }
    }

    handleStop = () => {
        this.setState({
            isRunning: !this.state.isRunning
        });
        if(!this.state.isRunning){
            this.setState({ 
                previousTime: Date.now()
            })
        }
    }

    handleReset = () => {
        this.setState({ 
            elapsedTime: 0,
            isRunning: !this.state.isRunning
        })
    }


 
    render() {
        const seconds = Math.floor(this.state.elapsedTime/1000);
        return (
            <div className="stopwatch">
                <h2> Stopwatch</h2>
                <span className="stopwatch-time">{seconds}</span>
                <button onClick={this.handleStop} >{this.state.isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset} >Reset</button>
            </div>
        )
    }
}




