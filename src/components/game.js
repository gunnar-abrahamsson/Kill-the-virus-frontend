import React from 'react'
import LookingForPlayer from './preAndPostGame/searching/lookingForPlayer';
import InGame from './inGame'

const Game = (props) => {

	return (
		<div>
			{props.opponent ?
				<InGame 
					userName={props.userName}
					opponent={props.opponent}
					gameData={props.gameData} 
					opponentReactionTime={props.opponentReactionTime}
					handleVirusClick={props.handleVirusClick}
					reactionTime={props.reactionTime}
					virus={props.virus}
					matchResoult={props.matchResoult} 
					handlePlayAgain={props.handlePlayAgain}
				/> 
			:
				<LookingForPlayer />
			}
		</div>
	)
}

export default Game;