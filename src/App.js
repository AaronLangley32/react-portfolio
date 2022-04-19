import React, { useState }from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { lightTheme, darkTheme, GlobalStyles } from './themes';

function App() {
  const [theme, setTheme] = useState("light")
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  const icon = theme === "light" ? <MdLightMode /> : <MdDarkMode />;
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <ThemeSwitch  onClick={() => themeToggler()}>
          {icon}
        </ThemeSwitch>
        <Navbar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

const ThemeSwitch = styled.button`
  width: 3rem;
  height: 3rem;
  font-size: 3rem;
  border: none;
  margin: 2rem 0rem 0rem 2rem;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: ${props => props.theme.switchColor};
  position: fixed;
  cursor: pointer;
  z-index: 11;
  transition: color 400ms ease-in-out;
  @media screen and (max-width: 990px) {
      bottom: 0;
      right: 0;
      margin: 0rem 3rem 3rem 0rem;
      width: 2.5rem;
      height: 2.5rem;
      font-size: 2.5rem;
  }
  @media screen and (max-width: 672px) {
      top: 0;
      left: 0;
      margin: 2rem 0rem 0rem 2rem;
  }
`

export default App;
