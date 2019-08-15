import React, {Component} from 'react';
import './Charactercard.css';


const CHARACTER_IMG = '../images/characters/'

class Charactercard extends Component {
    render(){
        let imgSrc = `${CHARACTER_IMG}${this.props.name}.png`;
        return (
            <div className="Charactercard">
                <h1>{this.props.name}</h1>
                <div className="Charactercard-profile">
                    <img src={imgSrc}  alt={this.props.name} />
                </div>
                <div className="Charactercard-stats">
                    <h2>{this.props.weapon}</h2>
                    <h3>Power:</h3>
                    <h2> {this.props.powers}</h2>
                    <h3>Skill:</h3>
                    <h2>{this.props.skill}</h2>
                </div>
            </div>
        )      
    }
}

export default Charactercard;
