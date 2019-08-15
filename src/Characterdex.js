import React, { Component } from 'react';
import Charactercard from './Charactercard'
import './Characterdex.css';

class Characterdex extends Component {
    static defaultProps = {
        battlechasers :[
        {id: 1, name:"Gully", weapon:"Gauntlets", powers:2500, skill:750},
        {id: 2, name:"Aramus", weapon:"Gauntlets", powers:2500, skill:1500},
        {id: 3, name:"Calibretto", weapon:"Guns", powers:1000, skill:1200},
        {id: 4, name:"Garrison", weapon:"Sword", powers:1750, skill:2750},
        {id: 5, name:"Knolan", weapon:"Magic", powers:2500, skill:2000},
        {id: 6, name:"Monika", weapon:"Pistols", powers:700, skill:1750}
        ]
    };

    render() {
        return (
            <div className="Characterdex">
                <h1>BattleChasers</h1>
                <div className="Characterdex-cards">
                    {this.props.battlechasers.map((c) => (
                    <Charactercard id={c.id} name={c.name} weapon={c.weapon} powers={c.powers} skill={c.skill}/>
                    ))}
                </div>
            </div>
        );

    }
}

export default Characterdex;
