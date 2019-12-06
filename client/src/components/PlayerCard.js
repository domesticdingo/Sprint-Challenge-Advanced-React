import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid black;
width: 200px;
max-width: 200px;
padding: 20px;
margin: 10px;
`

const PlayerCard = props => {
    return (
        <Div>
            <h2>{props.name}</h2>
            <h2>{props.country}</h2>
            <p>Searches: {props.searches}</p>
        </Div>
    )
}

export default PlayerCard