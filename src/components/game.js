import React from 'react'
import GameArea from './gameArea'

const Game = (props) => {

	return (
		<div>
            <h1>
                {props.userName} vs {props.opponent}
            </h1>
            <GameArea handleVirusClick={props.handleVirusClick} virus={props.virus} />
        </div>
	)
}

export default Game;