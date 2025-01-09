import React, { useState } from "react";
import axios from "axios";

const ScoreList = ({ username, difficulty }) => {
    const [scores, setScores] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

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

    // Funkcja pobierająca wyniki z backendu
    const fetchScores = () => {
        axios
            .get(`http://localhost:8080/scores/filterByDate`, {
                params: {
                    startDate,
                    endDate,
                },
            })
            .then((response) => {
                setScores(response.data);
            })
            .catch((error) => {
                console.error("Błąd podczas pobierania wyników:", error);
            });
    };

    return (
        <div>
            <h2>Wyniki dla {username} ({difficulty}):</h2>

            {/* Formularz filtrowania po zakresie dat */}
            <div>
                <label>Data początkowa: </label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <label>Data końcowa: </label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <button onClick={fetchScores}>Filtruj</button>
            </div>

            {/* Tabela wyników */}
            <table>
                <thead>
                <tr>
                    <th>Lp.</th>
                    <th>Wynik</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                {scores.map((score, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{score.score}</td>
                        <td>{formatDate(score.date)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScoreList;
