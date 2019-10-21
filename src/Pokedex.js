import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        let title;
        if(this.props.isWinner) {
            title = <h2 className="pokedex-winner">Winning Hand</h2>
        } else {
            title = <h2 className="pokedex-loser">Losing Hand</h2>
        }
        let pokemon = this.props.pokemon.map((p, index) => (
            <Pokecard
                key={index}
                id={p.id}
                name={p.name}
                type={p.type}
                exp = {p.base_experience}
            />
        ))
        return(
            <div className="pokedex">
                {title}
                <h4>Total Exp: {this.props.exp}</h4>
                <div className="pokedex-cards">
                    {pokemon}  
                </div>
            </div>
        )
    }
}

export default Pokedex;