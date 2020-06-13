import React from 'react'
import virusA from '../assets/svg/a.svg'

const Virus = (props) => {
    const virusStyle = {
        height: "30px",
        width: "30px",
        top: props.virus.y,
        left: props.virus.x
    }
	return (
		<img src={virusA} alt="virus" style={virusStyle} id="virus" onClick={props.handleVirusClick}/>
	)
}

export default Virus;