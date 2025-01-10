import React from "react";

function Home({ children }) {
    return (
        <div>
            <h2>Witamy w grze w zgadywanie liczb!</h2>
            {children}
        </div>
    );
}

export default Home;
