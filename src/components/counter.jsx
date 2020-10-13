import React from 'react';
import { Consumer } from './Context'


const Counter = ({ score, index }) => {
    // local component state
    return (
        <Consumer>
            {
                context => (
                    <div className="counter">
                        <div className="counter-action increment" onClick={() => context.actions.changeScore(index, 1, '+')}>+</div>
                        <div className="counter-score">{score}</div>
                        <div className="counter-action decrement" onClick={() => context.actions.changeScore(index, 1, '-')}>-</div>
                    </div>
                )
            }
        </Consumer>
    )
}

export default Counter