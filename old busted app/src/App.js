import React from 'react';
import './App.css';
import Players from './components/Players';
import styled from 'styled-components';
import useDarkMode from './hooks/useDarkMode';

let Header = styled.header`
margin-bottom: 20px;
border-bottom: 1px solid lightgrey;
text-align: center;
`

let Body = styled.div`
margin: auto;
max-width: 800px;
`

function App() {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <Body style={{
      background: theme === 'dark' ? '#000' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000'
    }}>
      <Header>
        <h1>Player Database</h1>
        <button onClick = {toggleTheme}>Light Switch</button>
      </Header>
      <Players />
    </Body>
  );
}

export default App;
