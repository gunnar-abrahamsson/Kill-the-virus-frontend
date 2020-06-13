import React from 'react'
import Virus from './virus'

const GameArea = (props) => {
    const virus = props.virus
	return (
		<div id="gameArea">
            {virus 
                ? <Virus handleVirusClick={props.handleVirusClick} virus={virus} />
                : ''
            }
            
        </div>
	)
}

export default GameArea;