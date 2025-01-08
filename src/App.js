import React, { useState } from "react";
import ScoreList from "./ScoreList";

function App() {
    const [username, setUsername] = useState("Gracz1");
    const [difficulty, setDifficulty] = useState("easy");

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleDifficultyChange = (e) => setDifficulty(e.target.value);

    return (
        <div>
            <header>
                <h1>Gra w zgadywanie liczb - Wyniki</h1>
            </header>
            <main>
                <section>
                    <h2>Wybierz parametry:</h2>
                    <label>
                        Nazwa użytkownika:
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Podaj nazwę użytkownika"
                        />
                    </label>
                    <br />
                    <label>
                        Poziom trudności:
                        <select value={difficulty} onChange={handleDifficultyChange}>
                            <option value="easy">Łatwy</option>
                            <option value="medium">Średni</option>
                            <option value="hard">Trudny</option>
                            <option value="hardcore">Hardkorowy</option>
                        </select>
                    </label>
                </section>
                <section>
                    <ScoreList username={username} difficulty={difficulty} />
                </section>
            </main>
            <footer>
                <p>&copy; 2025 Gra w zgadywanie liczb</p>
            </footer>
        </div>
    );
}

export default App;
