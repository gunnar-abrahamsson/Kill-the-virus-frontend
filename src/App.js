import React, { useState, useEffect } from "react";
import './assets/style/index.scss';
import useSocket from 'use-socket.io-client'
import Game from './components/game';
import Pregame from "./components/preAndPostGame/pregame";

const ENDPOINT = "";

function App() {
	const [userInput, setUserInput] = useState("");
    const [userName, setUserName] = useState("");
    const [opponent, setOpponent] = useState('');
    const [virusInfo, setVirusInfo] = useState('');
    const [virus, setVirus] = useState('');
    const [reactionTime, setReactionTime] = useState('');
    const [opponentReactionTime, setOpponentReactionTime] = useState('');
    const [gameData, setGameData] = useState({
        player: 0,
        opponent: 0,
        round: 0,
    })
    const [matchResoult, setMatchResoult] = useState(null);
    const [socket] = useSocket(ENDPOINT, {
        autoConnect: false,
    })
    socket.connect();
    
	//connect to socket when user has set userName

    useEffect(() => {
        //game room
        if(!userName) return;
        socket.on('joined game room', data => {
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

        socket.on('update score', (payload) => {
            setGameData({
                player: payload.player,
                opponent: payload.opponent,
                round: payload.round,
            });
        })

        socket.on('game over', (matchData) => {
            setMatchResoult(matchData);
        })
    }, [userName, socket]);

    //spawn virus when server sends new virus update
    useEffect(() => {
        if(!virusInfo) return;
        spawnVirus(virusInfo)
    }, [virusInfo]);

    const handleVirusClick = () => {
        console.log('MMMM click that virus!')
        const reactionTime = Date.now() - virus.spawnTime;
        socket.emit('submit reactionTime', reactionTime);
        setReactionTime(reactionTime);
        setVirus('');
    }
    
    const spawnVirus = (info) => {
        const { delay, x, y, size} = info
        setTimeout(() => {
            setVirus({x, y, spawnTime: Date.now(), size})
        }, delay * 1000)
    }
	const handleUsernameSubmit = (e) => {
		e.preventDefault();
		setUserName(userInput)
        socket.emit('submit userName', userInput)
        setUserInput('');
	}

	const handleFormInput = (e) => {
		setUserInput(e.target.value)
	}

    const handlePlayAgain = () => {
        setOpponent('');
        setVirus('');
        setVirusInfo('');
        setOpponentReactionTime('');
        setGameData({
            round: 0,
            player: 0,
            opponent: 0
        });
        setReactionTime('');
        setMatchResoult(null);
        socket.emit('play again')
    }
  	return (
		<div className="App">
				{userName 
					? <Game 
                        userName={userName} 
                        opponent={opponent} 
                        handleVirusClick={handleVirusClick} 
                        virus={virus} 
                        reactionTime={reactionTime}
                        opponentReactionTime={opponentReactionTime}    
                        gameData={gameData}
                        matchResoult={matchResoult}
                        handlePlayAgain={handlePlayAgain}
                        />
					: <Pregame 
                        handleUsernameSubmit={handleUsernameSubmit} 
                        handleFormInput={handleFormInput} 
                        userInput={userInput} 
                        />
				}
		</div>
  	);
}

export default App;
