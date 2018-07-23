import React from 'react';
import {Score} from './points.js';


export class Participant extends React.Component{

  constructor(props){
    super(props);
    //setting initial score
  this.state = {
    points: [
      {score: 0},
      {player: 1}
  ]
  }


    this.increaseScore = this.increaseScore.bind(this);
  };
//gives more points to a player
  increaseScore(morePoints) {
    let currentScore = this.state.points
    this.setState({
      points: currentScore.map((player) =>{
        if (player === this.props.key){
          score: currentScore + 1
        }
      }
      )
    });
  }

  render() {
    const playerNumber = [1, 2, 3, 4]
    return (
//iterates through and makes 4 score keeping buttons (try ternary operator on the onClick prop. if this.props.player === i)
      <ul>
        {playerNumber.map(i => {
          return <li key={i}>player:{i}<Score score={this.state.score} onClick={ (i) => this.increaseScore(i) } key={i} /></li>
        })}
      </ul>
    )
  }

  }
