import React from 'react'
import GameArea from './gameArea'
import PostGame from './postGame'
import moment from 'moment';
import Waiting from './waiting'

const Game = (props) => {

    const playerReactionTime = props.reactionTime ?
            moment(props.reactionTime).format('ss:SS')
        : '';
    const opponentReactionTime = props.opponentReactionTime ?
            moment(props.opponentReactionTime).format('ss:SS')
        : '';
    const gameData = props.gameData

	return (
		<div>
            {props.opponent ?
                <h1>
                    <span className="reactionTime">{playerReactionTime}</span> {props.userName} <span className="score">{gameData.player}</span> vs <span className="score">{gameData.opponent}</span> {props.opponent} <span className="reactionTime">{opponentReactionTime}</span>
                </h1>    
            :
                <Waiting />
            }
            {props.matchResoult ?
                <PostGame matchResoult={props.matchResoult} handlePlayAgain={props.handlePlayAgain} />
            :
                <GameArea 
                    handleVirusClick={props.handleVirusClick} 
                    virus={props.virus} 
                    opponentReactionTime={props.opponentReactionTime} 
                    reactionTime={props.reactionTime}
                />
            }
        </div>
	)
}

export default Game;