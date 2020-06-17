import React from 'react'
import moment from 'moment';
import PlayerStats from './playerStats'
import OpponentStats from './opponentStats'

const GameStats = (props) => {
    const playerReactionTime = props.reactionTime ?
            moment(props.reactionTime).format('ss:SS')
        : '';
    const opponentReactionTime = props.opponentReactionTime ?
        moment(props.opponentReactionTime).format('ss:SS')
        : '';

	return (
		<div id="gameStats">
            <PlayerStats playerReactionTime={playerReactionTime} gameData={props.gameData} userName={props.userName} />
            <h2 className="vs">VS</h2>
            <OpponentStats opponentReactionTime={opponentReactionTime} gameData={props.gameData} opponent={props.opponent} />
        </div>
	)
}

export default GameStats;