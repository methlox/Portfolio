import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Wcat from "../../Media/Wcat.png";
import Wdead from "../../Media/Wdead.png";
import Bcat from "../../Media/Bcat.png";
import Bdead from "../../Media/Bdead.png";
import {
  Container,
  DeadCatImage,
  CatImage,
  Scoreboard,
  ThemeToggleButton,
} from "./CatElements";

const lightTheme = {
  backgroundColor: "#fff",
  textColor: "#000",
  cat: Bcat,
  dead: Bdead,
};

const darkTheme = {
  backgroundColor: "#1c1c1c",
  textColor: "#fff",
  cat: Wcat,
  dead: Wdead,
};

const Game = () => {
  const [lives, setLives] = useState(9); // handles decreasing cat lives
  const [isDead, setIsDead] = useState(false); // handles changing img when life equals zero
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleCatClick = () => {
    if (lives > 0) {
      setLives(lives - 1);
    }

    if (lives === 1) {
      setIsDead(true);
    }
  };

  const handleDeadCatClick = () => {
    // gets the cat back to life
    setLives(9);
    setIsDead(false);
  };

  const toggleTheme = () => {
    //dark theme enabler
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        {isDead ? (
          <DeadCatImage
            src={isDarkTheme ? darkTheme.dead : lightTheme.dead}
            alt="dead cat"
            onClick={handleDeadCatClick}
          />
        ) : (
          <CatImage
            src={isDarkTheme ? darkTheme.cat : lightTheme.cat}
            alt="cat"
            onClick={handleCatClick}
          />
        )}
        <Scoreboard>Lives: {lives}</Scoreboard>
        <ThemeToggleButton onClick={toggleTheme}>
          {isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
        </ThemeToggleButton>
      </Container>
    </ThemeProvider>
  );
};

export default Game;
