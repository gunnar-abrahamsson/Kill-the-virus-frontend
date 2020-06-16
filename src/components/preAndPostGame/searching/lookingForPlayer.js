import React from 'react'
import Waiting from './waiting'
import Title from '../../gameTitle/title'
import worldMap from '../../../assets/svg/World_Map_pink.svg'

const LookingForOpponent = (props) => {
	return (
        <div className="lookingForOpponent">
            <Title />
            <Waiting />
            <img src={worldMap} alt="game board" className="world_map" />
        </div>
	)
}

export default LookingForOpponent;