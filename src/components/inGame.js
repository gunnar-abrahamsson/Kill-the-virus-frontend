import React from 'react'
import GameStats from './gameStats/gameStats'
import Title from './gameTitle/title';
import GameBoard from './gameBoard/gameBoard';

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
        </div>
	)
}

export default InGame;