import React, { useEffect, useState } from "react";
import axios from "axios";

const ScoreList = ({ username, difficulty }) => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/scores/filter?username=${username}&difficulty=${difficulty}`)
            .then(response => {
                setScores(response.data);
            })
            .catch(error => {
                console.error("Błąd podczas pobierania wyników:", error);
            });
    }, [username, difficulty]);

    // Funkcja pomocnicza do formatowania daty
    const formatDate = (dateString) => {
        if (!dateString) return "Brak daty";
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("pl-PL", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }).format(date);
    };

    return (
        <div>
            <h2>Wyniki dla {username} ({difficulty}):</h2>
            <ul>
                {scores.map((score, index) => (
                    <li key={index}>
                        Wynik: {score.score}, Data: {formatDate(score.date)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScoreList;
