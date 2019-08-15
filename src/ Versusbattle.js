import React, { Component } from 'react';
import Characterdex from './Characterdex';

class Versusbattle extends Component {
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
        let hand1 = [];
        let hand2 = [...this.props.battlechasers];

        while (hand1.length < hand2.length ){
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randCharacter = hand2.splice(randIdx, 1)[0];
            hand1.push(randCharacter);
        }

        let combinedStrengths1 = hand1.reduce((powers, battlechasers) => powers + battlechasers.powers + battlechasers.skill, 0);
        let combinedStrengths2 = hand2.reduce((powers, battlechasers) => powers + battlechasers.powers + battlechasers.skill, 0);

        return (
            <div> 
                <h1>Vs.</h1>
                <Characterdex battlechasers={hand1} combinedStrengths={combinedStrengths1} isWinner={combinedStrengths1 > combinedStrengths2}/>
                <Characterdex battlechasers={hand2} combinedStrengths={combinedStrengths2} isWinner={combinedStrengths1 < combinedStrengths2}/>

            </div>
        )
    }
}

export default Versusbattle;
