import React from 'react';
import {Score} from './points.js';


export class Participant extends React.Component{

  constructor(props){
    super(props);
    //setting initial score
    this.state = {
      score: 0,
    }
    this.increaseScore = this.increaseScore.bind(this);
  };
//gives more points to a player
  increaseScore(morePoints) {
    let currentScore = this.state.score
    this.setState({
      score: currentScore + 1
    });
  }

  render() {
    const playerNumber = [1, 2, 3, 4]
    return (
//iterates through and makes 4 score keeping buttons
      <ul>
        {playerNumber.map(i => {
          return <li key={i}>player:{i}<Score score={this.state.score} onClick={ (i) => this.increaseScore(i)} player={i} /></li>
        })}
      </ul>
    )
  }

  }
