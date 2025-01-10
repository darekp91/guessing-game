import React, { useEffect, useState } from "react";
import axios from "axios";

const TopScores = () => {
    const [topScores, setTopScores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/scores/top")
            .then(response => setTopScores(response.data))
            .catch(error => console.error("Błąd podczas pobierania najlepszych wyników:", error));
    }, []);

    return (
        <div>
            <h2>Najlepsze wyniki:</h2>
            <ol>
                {topScores.map((score, index) => (
                    <li key={index}>
                        {score.username || "Anonim"}: {score.score} punktów
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TopScores;
