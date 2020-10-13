import React, { Component } from 'react';
import { Provider } from './Context'
import Header from './header'
import AddPlayer from './AddPlayerForm'
import PropTypes from 'prop-types'
import AddPlayerList from './addPlayerList'

export default class App extends Component {
    static propTypes = {
        changeScore: PropTypes.func,
        handleAddPlayer: PropTypes.func,
        removePlayer: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    name: "Guil",
                    id: 1,
                    score: 0
                },
                {
                    name: "Treasure",
                    id: 2,
                    score: 0
                },
                {
                    name: "Ashley",
                    id: 3,
                    score: 0
                },
                {
                    name: "James",
                    id: 4,
                    score: 0
                }
            ]
        }
    }

    // aplication state, available to the entire app




    getHighScore = () => {
        const scores = this.state.players.map(p => p.score)
        const highScore = Math.max(...scores);
        if (highScore) {
            return highScore;
        }
        return null
    }




    // if you need to change or remove something use setState + prevState
    // then state to be changed : change expression
    changeScore = (index, delta, type) => {
        this.setState(prevState => {
            const updatedPlayers = [...prevState.players];
            const updatedPlayer = { ...updatedPlayers[index] };
            if (type === '+') {
                updatedPlayer.score += delta;
                updatedPlayers[index] = updatedPlayer;
                return {
                    players: updatedPlayers
                }
            }
            if (type === '-') {
                updatedPlayer.score -= delta;
                updatedPlayers[index] = updatedPlayer;
                return {
                    players: updatedPlayers
                }
            }
        })
    }

    prevIdPlayer = 4

    handleAddPlayer = (name) => {
        this.setState(prevState => ({
            players: [
                // makes a copy of the previous array, then add new items
                ...prevState.players,
                {
                    name,
                    score: 0,
                    id: this.prevIdPlayer += 1
                }
            ]
        })
        )
    }


    removePlayer = (playerId) => {
        this.setState(prevState => ({
            players: prevState.players.filter(player => player.id !== playerId)
            // It uses !== because if it return true it keeps it, else it filers out. And as we want to remove it the idea is to return false
        }));

    }

    render() {
        return (
            <Provider value={
                {
                    players: this.state.players,
                    actions: {
                        changeScore: this.changeScore,
                        remove: this.removePlayer,
                        highScore: this.getHighScore
                    }
                }} >
                <div className="scoreboard">
                    <Header />
                    <AddPlayerList
                        players={this.state.players}
                        changeScore={this.changeScore}
                        remove={this.removePlayer}

                    />
                    <AddPlayer addPlayer={this.handleAddPlayer} />
                </div>
            </Provider>
        )
    }
}
