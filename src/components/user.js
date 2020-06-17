import React from 'react'

const User = (props) => {
	return (
		<form onSubmit={props.handleUsernameSubmit}>
			<div className="form-group">
				<label htmlFor="userName">User Name</label>
   				<input onChange={props.handleFormInput} value={props.userInput} type="text" id="userName" aria-describedby="user Name" />
  			</div>
		</form>
	)
}

export default User;