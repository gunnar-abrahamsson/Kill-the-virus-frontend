import React, { useState, useEffect } from "react";
import useSocket from 'use-socket.io-client'
import User from './components/user';
import Game from './components/game';
import Virus from "./components/virus";
//import logo from './logo.svg';

const ENDPOINT = "http://localhost:9000";

function App() {
	const [userInput, setUserInput] = useState("");
    const [userName, setUserName] = useState("");
    const [gameRoom, setGameRoom] = useState("");
    const [opponent, setOpponent] = useState('');
    const [virusInfo, setVirusInfo] = useState('');
    const [virus, setVirus] = useState('');
    const [reactionTime, setReactionTime] = useState('');
    const [opponentReactionTime, setOpponentReactionTime] = useState('');
    const [socket] = useSocket(ENDPOINT, {
        autoConnect: false,
    })
    socket.connect();
    
	//connect to socket when user has set userName
    useEffect(() => {
        if(!userName) return;
        socket.emit('submit userName', userName)
    }, [userName, socket]);

    useEffect(() => {
        //game room
        socket.on('joined game room', data => {
            setGameRoom(data);
            if(!userName) return;
            socket.emit('join', { userName, room: data })
        })

        socket.on('player joined', data => {
            setOpponent(data)
        })

        socket.on('spawn virus', virus => {
            setVirusInfo(virus)
        })

        socket.on('opponents reactionTime', opponentReaction => {
            setOpponentReactionTime(opponentReaction)
        })

    }, [userName, reactionTime, socket]);

    //spawn virus when server sends new virus update
    useEffect(() => {
        if(!virusInfo) return;
        spawnVirus(virusInfo)
    }, [virusInfo]);

    const handleVirusClick = () => {
        console.log('MMMM click that virus!')
        const reactionTime = Date.now() - virus.spawnTime;
        socket.emit('submit reactionTime', reactionTime)
        setVirus('');
    }
    
    const spawnVirus = (info) => {
        const { delay, x, y} = info
        setTimeout(() => {
            setVirus({x, y, spawnTime: Date.now()})
        }, delay * 1000)
    }
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
					? <Game userName={userName} opponent={opponent} handleVirusClick={handleVirusClick} virus={virus} />
					: <User 
                        handleUsernameSubmit={handleUsernameSubmit} 
                        handleFormInput={handleFormInput} 
                        userInput={userInput} 
                        />
				}
			</div>
		</div>
  	);
}

export default App;
