import React from 'react'

const PostGame = (props) => {
	const resoult = () => {
		if(props.matchResoult.resoult === 'win') {
			return 'You won!'
		} else if (props.matchResoult.resoult === 'lose') {
			return 'You lost!'
		} else {
			return 'Draw!'
		}
	}
	return (
		<div className="postGame">
			<h2>{resoult()}</h2>
			<button className="btn btn-success" onClick={props.handlePlayAgain}>Play again?</button>
		</div>
	)
}

export default PostGame;