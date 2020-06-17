import React from 'react'
import virus1 from '../../assets/svg/a.svg'

const Score = (props) => {
    const virusScore = []
    for(let i = 0; i < props.score; i++){
        virusScore.push(virus1)
    }


    const score = virusScore.map((virus, index) => {
        return <img src={virus} alt="Virus score" key={index} />
    })

	return (
        <span id="score" className={props.scoreType}>
            {score}
        </span>
	)
}

export default Score;