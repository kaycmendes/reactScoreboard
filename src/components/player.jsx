import React from 'react';
import Counter from './counter';
import Crown from './highScore';
import { Consumer } from './Context';

const Player = ({ name, id, index, score, changeScore, isHighScore }) => {
    return (
        <div className="player">
            <Consumer>
                {
                    context => (
                        <span className="player-name">
                            <button className="remove-player" onClick={() => context.actions.remove(id)}>✗</button>
                            {name}
                            {<Crown
                                score={score}
                                isHighScore = {score === context.actions.highScore()}
                                // "if you're instanciate a function remember to add the ()"
                            />}
                        </span>

                    )
                }
            </Consumer>
            <Counter
                index={index}
                score={score}
                changeScore={changeScore}
            />
        </div>
    )
}

export default Player
