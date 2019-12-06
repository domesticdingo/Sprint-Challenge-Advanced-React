import React from 'react';
import './App.css';
import Players from './components/Players';
import styled from 'styled-components';

let Header = styled.header`
margin-bottom: 20px;
border-bottom: 1px solid black;
text-align: center;
`

let Body = styled.div`
margin: auto;
max-width: 800px;
`

function App() {

  return (
    <Body>
      <Header>
        <h1>Player Database</h1>
      </Header>
      <Players />
    </Body>
  );
}

export default App;
