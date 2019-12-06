import React from 'react';
import Axios from 'axios';
import PlayerCard from './PlayerCard';
import styled from 'styled-components';


const Div = styled.div`
display: flex;
flex-wrap: wrap;
`

class Players extends React.Component {
    state = {
        players: []
    }

    componentDidMount() {
        Axios
            .get("http://localhost:5000/api/players")
            .then((response) => {
                this.setState({ players: response.data })
                console.log(this.state.players)
            })
            .catch(err => {
                console.log("Error: " + err)
            })
        
    }

    render() {
        return (
            <Div>
                {this.state.players.map(player => (
                    <PlayerCard
                        id={player.id}
                        name={player.name}
                        country={player.country}
                        searches={player.searches}
                    />
                ))}
            </Div>
        )
    }
}

export default Players;