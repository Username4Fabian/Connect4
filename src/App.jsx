import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Board from "./components/Board.jsx";

function App() {
  const [playerTurn, setPlayerTurn] = useState(1);

  const handleTurnChange = () => {
    setPlayerTurn(playerTurn === 1 ? 2 : 1);
  };

  return (
    <>
      <Header />
      <Board playerTurn={playerTurn} onTurnChange={handleTurnChange} />
      <Footer />
    </>
  );
}

export default App;