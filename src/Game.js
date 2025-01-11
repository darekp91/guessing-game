import React, { useState } from "react";

const Game = () => {
    const [numberToGuess, setNumberToGuess] = useState(Math.floor(Math.random() * 100) + 1);
    const [attemptsLeft, setAttemptsLeft] = useState(5);
    const [userGuess, setUserGuess] = useState("");
    const [message, setMessage] = useState("");

    const handleGuess = () => {
        const guess = parseInt(userGuess, 10);
        if (isNaN(guess)) {
            setMessage("Proszę wprowadzić poprawną liczbę!");
            return;
        }
        if (guess === numberToGuess) {
            setMessage("Gratulacje! Odgadłeś liczbę!");
            setAttemptsLeft(0);
        } else if (guess < numberToGuess) {
            setMessage("Za mało!");
        } else {
            setMessage("Za dużo!");
        }
        setAttemptsLeft(attemptsLeft - 1);
        if (attemptsLeft - 1 === 0) {
            setMessage(`Przegrałeś! Liczba do odgadnięcia to: ${numberToGuess}`);
        }
    };

    return (
        <div>
            <h2>Gra w zgadywanie liczb</h2>
            <p>Próby pozostałe: {attemptsLeft}</p>
            <input
                type="number"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                placeholder="Twoja liczba"
            />
            <button onClick={handleGuess}>Zgadnij</button>
            <p>{message}</p>
        </div>
    );
};

export default Game;
