import React from 'react'
import GameStats from './gameStats/gameStats'
import Title from './gameTitle/title';
import GameBoard from './gameBoard/gameBoard';
import PostGame from './preAndPostGame/postGame'

const InGame = (props) => {
	return (
		<div id="inGame">
			<Title />
			<GameStats
				userName={props.userName}
				opponent={props.opponent}
				gameData={props.gameData} 
				opponentReactionTime={props.opponentReactionTime}
				reactionTime={props.reactionTime}
			/> 
			<GameBoard 
				virus={props.virus} 
				handleVirusClick={props.handleVirusClick}   
			/>
			{props.matchResoult ?
				<PostGame matchResoult={props.matchResoult} handlePlayAgain={props.handlePlayAgain} />
			: ''
			}
		</div>
	)
}

export default InGame;