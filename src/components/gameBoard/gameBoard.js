import React from 'react'
import Virus from '../virus'

const GameBoard = (props) => {
    const virus = props.virus
	return (
		<div id="gameBoard">
            {virus 
                ? <Virus handleVirusClick={props.handleVirusClick} virus={virus} />
                : ''
            }
            
        </div>
	)
}

export default GameBoard;