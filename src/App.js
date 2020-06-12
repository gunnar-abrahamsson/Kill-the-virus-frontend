import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import User from './components/user';
import Game from './components/game';
//import logo from './logo.svg';

const ENDPOINT = "http://localhost:9000";

function App() {
	const [response, setResponse] = useState("");
	const [userInput, setUserInput] = useState("");
    const [userName, setUserName] = useState("");
    const [gameRoom, setGameRoom] = useState("");
    const [opponent, setOpponent] = useState('');
    
	//connect to socket and handle communication
    useEffect(() => {
        if(!userName) return;
    	const socket = socketIOClient(ENDPOINT, {
            query: {
                userName: userName
            }
        })
        socket.on("connected", data => {
            setResponse(data);
        });
        //game room
        socket.on('joined game room', data => {
            setGameRoom(data);
            socket.emit('join', { userName, room: data })
        })

        socket.on('player joined', data => {
            console.log('player name', data)
            setOpponent(data)
        })
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
					? <Game userName={userName} opponent={opponent}/>
					: <User handleUsernameSubmit={handleUsernameSubmit} handleFormInput={handleFormInput} userInput={userInput} />
				}
			</div>
		</div>
  	);
}

export default App;
