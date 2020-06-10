import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import User from './components/user';
//import logo from './logo.svg';

const ENDPOINT = "http://127.0.0.1:9000";

function App() {
	const [response, setResponse] = useState("");
	const [userInput, setUserInput] = useState("");
	const [userName, setUserName] = useState("");

	//connect to socket and handle communication
  	useEffect(() => {
		if(!userName) return;
    	const socket = socketIOClient(ENDPOINT, {
			query: {
				username: userName
			}
		});
    	socket.on("test-socket", data => {
     	 	setResponse(data);
    	});
  	}, [userName]);
	
	const handleUsernameSubmit = (e) => {
		e.preventDefault();
		setUserName(userInput)
		setUserInput('');
	}

	const handleFormInput = (e) => {
		setUserInput(e.target.value)
	}

  	return (
		<div className="App">
			<div className="container">
				{userName 
					? <h1>{response}</h1>	
					: <User handleUsernameSubmit={handleUsernameSubmit} handleFormInput={handleFormInput} userInput={userInput} />
				}
			</div>
		</div>
  	);
}

export default App;
