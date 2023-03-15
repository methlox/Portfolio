import React, { useState } from "react";
import styled from "styled-components";
import cat from './Media/cat.png'
import dead from './Media/cat-dead.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Scoreboard = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

const CatImage = styled.img`
  // width: 200px;
  // height: 200px;
  margin-top: 20px;
  cursor: pointer;
`;

const DeadCatImage = styled.img`
  // width: 200px;
  // height: 200px;
  margin-top: 20px;
`;

const Game = () => {
  const [lives, setLives] = useState(9);
  const [isDead, setIsDead] = useState(false);
  const [life, setLife] = useState(0);

  const handleCatClick = () => {
    if (lives > 0) {
      setLives(lives - 1);
    }

    if (lives === 1) {
      setIsDead(true);
    }
  };

  const handleDeadCatClick = () => {
    setLives(9);
    setIsDead(false);
  }

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
