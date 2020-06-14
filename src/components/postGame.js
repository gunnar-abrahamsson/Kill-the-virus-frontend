import React from 'react'

const PostGame = (props) => {
	return (
        <div>
            <h2>{props.matchResoult.resoult}</h2>
            <button className="btn btn-success" onClick={props.handlePlayAgain}>Play again?</button>
        </div>
	)
}

export default PostGame;