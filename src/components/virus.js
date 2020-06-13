import React from 'react'
import virus1 from '../assets/svg/a.svg'
import virus2 from '../assets/svg/b.svg'
import virus3 from '../assets/svg/c.svg'

const Virus = (props) => {
    const virusStyle = {
        height: `${props.virus.size}px`,
        width: `${props.virus.size}px`,
        top: props.virus.y,
        left: props.virus.x
    }

    const randomImg = Math.floor(Math.random() * 3) + 1;
    const getRandomImg = (randomImg) => {
        if(randomImg === 1) {
            return <img src={virus1} alt="virus" style={virusStyle} id="virus" onClick={props.handleVirusClick}/>
        } else if (randomImg === 2) {
            return <img src={virus2} alt="virus" style={virusStyle} id="virus" onClick={props.handleVirusClick}/>
        } else {
            return <img src={virus3} alt="virus" style={virusStyle} id="virus" onClick={props.handleVirusClick}/>
        }
    }
	return (
        <div>
            {getRandomImg(randomImg)}
        </div>
	)
}

export default Virus;