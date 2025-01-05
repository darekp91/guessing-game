import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [gameScore, setGameScore] = useState(0);
    const [username, setUsername] = useState('Gracz1'); // Tymczasowy gracz

    // Funkcja do wysyłania wyniku gry na backend
    function sendScore(username, score) {
        axios.post('http://localhost:8080/scores', {
            username: username,
            score: score
        })
            .then(response => {
                console.log("Odpowiedź z serwera:", response.data);
            })
            .catch(error => {
                console.error("Błąd przy wysyłaniu wyniku:", error);
            });
    }

    // Funkcja do obsługi zakończenia gry
    const endGame = () => {
        const score = Math.floor(Math.random() * 100) + 1; // Przykładowy wynik (możesz dostosować)
        setGameScore(score);
        sendScore(username, score);
    };

    return (
        <div className="App">
            <h1>Gra w zgadywanie liczb</h1>
            <p>Aktualny wynik: {gameScore}</p>
            <button onClick={endGame}>Zakończ grę</button>
        </div>
    );
}

export default App;
