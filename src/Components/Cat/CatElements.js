import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15em;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  transition: background-color 0.2s ease-in-out;
`;

export const Scoreboard = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  font-color: ${(props) => props.theme.textColor};
`;

export const CatImage = styled.img`
  margin-top: 20px;
  cursor: pointer;
`;

export const DeadCatImage = styled.img`
  margin-top: 20px;
  cursor: pointer;
`;

export const ThemeToggleButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;