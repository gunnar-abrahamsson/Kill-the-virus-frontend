import React from 'react'
import Score from './score'

const OpponentStats = (props) => {
	return (
        <h2 id="opponentStats">
            {props.opponent} 
            <span className="reactionTime">{props.opponentReactionTime}</span>
            <Score score={props.gameData.opponent} scoreType="opponentScore" /> 
        </h2>
	)
}

export default OpponentStats;