import React from 'react'
import Waiting from './waiting'
import Title from '../../gameTitle/title'
import GameBoard from '../../gameBoard/gameBoard'

const LookingForOpponent = (props) => {
	return (
		<div className="lookingForOpponent">
			<Title />
			<Waiting />
			<GameBoard />
		</div>
	)
}

export default LookingForOpponent;