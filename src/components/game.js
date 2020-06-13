import React from 'react'
import GameArea from './gameArea'
import moment from 'moment';

const Game = (props) => {

    const playerReactionTime = props.reactionTime ?
            moment(props.reactionTime).format('ss:SS')
        : '';
    const opponentReactionTime = props.opponentReactionTime ?
            moment(props.opponentReactionTime).format('ss:SS')
        : '';
    const { player, opponent, round} = props.gameData

	return (
		<div>
            <h1>
                <span className="reactionTime">{playerReactionTime}</span> {props.userName} <span className="score">{player}</span> vs <span className="score">{opponent}</span> {props.opponent} <span className="reactionTime">{opponentReactionTime}</span>
            </h1>
            <GameArea 
                handleVirusClick={props.handleVirusClick} 
                virus={props.virus} 
                opponentReactionTime={props.opponentReactionTime} 
                reactionTime={props.reactionTime}
                />
        </div>
	)
}

export default Game;