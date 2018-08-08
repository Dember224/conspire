import React from 'react';
import {Score} from './points.js';


export class Participant extends React.Component{

  constructor(props){
    super(props);
    //setting initial score. The keys each represent users. The values are scores.
  this.state = {
    0:0,
    1:0,
    2:0,
    3:0,
    turn: 0
  }


    this.increaseScore = this.increaseScore.bind(this);
  };
//gives more points to a player if they have no score
  increaseScore(player) {
    if(this.state[player] === 0 && this.state.turn === player) {
      this.setState({
        [player]: Math.floor(Math.random()*7)
      });
    }
    if(this.state.turn < 3) {
      this.setState({
        turn: this.state.turn + 1
      })
    }
    else {
      this.setState({
        turn: this.state.turn = 0
      })
    }


    

  }

  render() {
    const playerNumber = [0, 1, 2, 3]
    return (
/*iterates through and makes 4 score keeping buttons. Increasing score independently for each player.
Passes additional points to increaseScore method onAction().
*/
      <ul>
        {playerNumber.map(i => {
          return <li key={i}>player:{i}<Score score={this.state[Object.keys(this.state)[i]]} onClick={() => this.increaseScore(i)} number={this.state.number} key={i}  />{this.props.number}</li>
        })}
        <li>{this.state.turn}</li>
      </ul>
    )
  }

  }
