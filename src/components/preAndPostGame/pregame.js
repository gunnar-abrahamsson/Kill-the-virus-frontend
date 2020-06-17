import React from 'react'

const Pregame = (props) => {
	return (
		<div className="pregame">
			<div className="content">
				<h1 className="text-center caps">Kill the virus</h1>
				<form onSubmit={props.handleUsernameSubmit}>
					<div className="form-group">
						<input autoFocus onChange={props.handleFormInput} value={props.userInput} type="text" className="form-control username_input" id="userName" aria-describedby="user Name" placeholder="Enter username..." />
					</div>
				</form>
			</div>
		</div>
		
	)
}

export default Pregame;