import React from 'react';
import {Score} from './points.js';
import {turnColor} from './styles/turns.js';
import {Steal} from './steal.js'


export class Participant extends React.Component{

  constructor(props){
    super(props);
    //setting initial score. The keys each represent users. The values are scores.
  this.state = {
    0:0,
    1:0,
    2:0,
    3:0,
    turn: 0,
    kitty: 0
  }


    this.increaseScore = this.increaseScore.bind(this);
    this.stealScore = this.stealScore.bind(this);
  };
//gives more points to a player if they have no score
  increaseScore(player) {
    if(this.state[player] === 0 && this.state.turn === player) {
      this.setState({
        [player]: Math.floor(Math.random()*7)
      });
    }
//sets the current players turn based on the last player who clicked.
    if(this.state.turn < 3) {
      this.setState({
        turn: this.state.turn + 1
      })
    }
    else {
      this.setState({
        turn: 0
      })
    }

  };
//steals half the score from the selected player and adds it to the current player's score.
  stealScore(player) {
    if(this.state.turn !== player) {
      const robbedScore = this.state[player]*.5
      const currentScore = this.state[this.state.turn]
      this.setState({
        [player]: robbedScore,
        [this.state.turn]: currentScore + robbedScore
      })
      if(this.state.turn < 3) {
        this.setState({
          turn: this.state.turn + 1
        })
      }
      else {
        this.setState({
          turn: 0
        })
      }
    }
  }

  render() {
    return (
/*For setting the initial score at the beggining of play
*/
      <div >
        <div style={turnColor(this.state.turn)}>player:{this.state.turn}<Score score={this.state[Object.keys(this.state)[this.state.turn]]} onClick={() => this.increaseScore(this.state.turn)} number={this.state.score} /></div>
        <ol>
          <li>Player 1: {this.state[0]}$</li>
          <li>Player 2: {this.state[1]}$</li>
          <li>Player 3: {this.state[2]}$</li>
          <li>Player 4: {this.state[3]}$</li>
        </ol>

        <div style={turnColor(this.state.turn)}>Steal from player:
        <Steal onClick={() => this.stealScore(0)} number={1}/>
        <Steal onClick={() => this.stealScore(1)} number={2}/>
        <Steal onClick={() => this.stealScore(2)} number={3}/>
        <Steal onClick={() => this.stealScore(3)} number={4}/>

        </div>
      </div>
    )
  }

  }
