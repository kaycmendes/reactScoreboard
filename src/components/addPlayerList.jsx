import React from 'react'
import Player from './player'
import { Consumer } from './Context'


const AddPlayerList = ({getHighScore}) => {
    return (
        <Consumer>
            {context => (
                <>
                    {
                        context.players.map((player, index) =>
                            <Player
                                {...Player}
                                id={player.id}
                                score={player.score}
                                name={player.name}
                                key={player.id.toString()}
                                index={index}
                            />
                        )}

                </>
            )}
        </Consumer>
    )
}

export default AddPlayerList
