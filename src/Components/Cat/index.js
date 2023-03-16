import React, { useState } from "react";
import cat from "../../Media/cat.png"
import dead from "../../Media/cat-dead.png";
import { Container, DeadCatImage, CatImage, Scoreboard } from "./CatElements"

const Game = () => {
  const [lives, setLives] = useState(9); // handles decreasing cat lives
  const [isDead, setIsDead] = useState(false); // handles changing img when life equals zero

  const handleCatClick = () => {
    if (lives > 0) {
      setLives(lives - 1);
    }

    if (lives === 1) {
      setIsDead(true);
    }
  };

  const handleDeadCatClick = () => { // gets the cat back to life
    setLives(9);
    setIsDead(false);
  };

  return (
    <Container>
      {isDead ? (
        <DeadCatImage src={dead} alt="dead cat" onClick={handleDeadCatClick} />
      ) : (
        <CatImage src={cat} alt="cat" onClick={handleCatClick} />
      )}
      <Scoreboard>Lives: {lives}</Scoreboard>
    </Container>
  );
};

export default Game;
