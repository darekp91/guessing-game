import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScoreList from "./ScoreList";
import TopScores from "./TopScores"; // Import widoku "Najlepsze wyniki"
import Home from "./Home"; // Import widoku strony głównej
import Game from "./Game";
import './styles.css';

function App() {
    const [username, setUsername] = useState("Gracz1");
    const [difficulty, setDifficulty] = useState("easy");

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleDifficultyChange = (e) => setDifficulty(e.target.value);

    return (
        <Router>
            <div>
                <header>
                    <h1>Gra w zgadywanie liczb</h1>
                    <nav>
                        <Link to="/">Strona główna</Link> |{" "}
                        <Link to="/top-scores">Najlepsze wyniki</Link> |{" "}
                        <Link to="/game">Zagraj</Link>
                    </nav>
                </header>
                <main>
                    <Routes>
                        {/* Strona główna */}
                        <Route
                            path="/"
                            element={
                                <Home>
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
                                </Home>
                            }
                        />

                        {/* Widok najlepszych wyników */}
                        <Route path="/top-scores" element={<TopScores />} />

                        {/* Widok gry */}
                        <Route
                            path="/game"
                            element={<Game username={username} difficulty={difficulty} />}
                        />
                    </Routes>
                </main>
                <footer>
                    <p>&copy; 2025 Gra w zgadywanie liczb</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
