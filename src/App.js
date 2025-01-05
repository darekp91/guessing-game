import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Wysyłamy żądanie GET do backendu
        axios.get('http://localhost:8080/hello')
            .then(response => {
                setMessage(response.data); // Odbieramy wiadomość od backendu
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h1>Komunikacja Frontend - Backend</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
