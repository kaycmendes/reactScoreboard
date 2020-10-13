import React from 'react';
import Stats from './stats'
import Stopwatch from './stopwatch'

const Header = () => {
    return (
        <header >
            <Stats />
            <h1 > Scoreboard</h1>
            <Stopwatch />
        </header>
    )
}

export default Header