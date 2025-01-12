import React, { useEffect, useState } from "react";
import axios from "axios";

const TopScores = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/scores/top")
            .then(response => setScores(response.data))
            .catch(error => console.error("Błąd podczas pobierania wyników:", error));
    }, []);

    return (
        <div>
            <h2>Najlepsze wyniki</h2>
            <table>
                <thead>
                <tr>
                    <th>Pozycja</th>
                    <th>Użytkownik</th>
                    <th>Wynik</th>
                    <th>Poziom trudności</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                {scores.map((score, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{score.username || "Anonim"}</td>
                        <td>{score.score}</td>
                        <td>{score.difficulty}</td>
                        <td>{new Date(score.date).toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopScores;
