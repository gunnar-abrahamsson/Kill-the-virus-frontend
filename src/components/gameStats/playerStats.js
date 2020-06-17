import React from 'react'
import Score from './score'

const PlayerStats = (props) => {
    
	return (
        <div id="playerStats">
            <h2>
                <span className="reactionTime">{props.playerReactionTime}</span> 
                {props.userName} 
                <Score score={props.gameData.player} scoreType="playerScore" />
            </h2>
        </div>
	)
}

export default PlayerStats;