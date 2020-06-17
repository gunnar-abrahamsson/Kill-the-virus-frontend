import React from 'react'
import PostGame from './postGame'
import LookingForPlayer from './preAndPostGame/searching/lookingForPlayer';
import InGame from './inGame'

const Game = (props) => {

	return (
		<div>
            {props.matchResoult ?
                <PostGame matchResoult={props.matchResoult} handlePlayAgain={props.handlePlayAgain} />
            :
                props.opponent ?
                    <InGame 
                        userName={props.userName}
                        opponent={props.opponent}
                        gameData={props.gameData} 
                        opponentReactionTime={props.opponentReactionTime}
                        handleVirusClick={props.handleVirusClick}
                        reactionTime={props.reactionTime}
                        virus={props.virus}
                    /> 
                :
                    <LookingForPlayer />
            }
        </div>
	)
}

                // <GameArea 
                //     handleVirusClick={props.handleVirusClick} 
                //     virus={props.virus} 
                //     opponentReactionTime={props.opponentReactionTime} 
                //     reactionTime={props.reactionTime}
                // />
export default Game;