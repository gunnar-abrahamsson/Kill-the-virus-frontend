import React from 'react'

const Game = (props) => {
	return (
		<div>{props.userName} vs {props.opponent}</div>
	)
}

export default Game;