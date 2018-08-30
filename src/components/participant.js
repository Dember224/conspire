import React from 'react';
import {Score} from './points.js';
import {turnColor} from './styles/turns.js';
import {Steal} from './steal.js'
import {Collude} from './collude.js'
import {colludeDisplay} from './styles/colludeDisplay.js'

export class Participant extends React.Component{

  constructor(props){
    super(props);
    //setting initial score. The keys each represent users. The values are scores.
    //the turn handles whos turn it is
  this.state = {
    0:0,
    1:0,
    2:0,
    3:0,
    turn: 0,
    kitty: 0,
    player1: null,
    player2: null,
    player3: null,
    player4: null
  }

    this.collude = this.collude.bind(this);
    this.increaseScore = this.increaseScore.bind(this);
    this.stealScore = this.stealScore.bind(this);
  };
//gives more points to a player if they have no score
  increaseScore(player) {
    if(this.state[player] === 0 && this.state.turn === player) {
      this.setState({
        [player]: Math.floor(Math.random()*100)
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
    if(this.state.turn !== player && this.state[this.state.turn] > this.state[player]) {
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

collude(player, against, acceptFrom) {
  switch(player) {
    case 'player1':
      if (this.state.player1 === null) {
        this.setState({
          player1: [this.state.turn, against],
          turn: this.state.turn +1
        })
      }
      else{
        const combined = this.state[this.state.player1[0]] + this.state[this.state.turn]
        if (combined > this.state[against]) {

          const halfAgainstScore = this.state[against]/2
          this.setState({
            [this.state.turn]: this.state[this.state.turn] + (halfAgainstScore/2),
            [this.state[acceptFrom]]: this.state[acceptFrom] + (halfAgainstScore/2),
            [against]: halfAgainstScore,
            turn: this.state.turn +1,
            player1: null
          })
        }
      };
    break;
    case 'player2':
      if (this.state.player2 === null) {
        this.setState({
          player2: [this.state.turn, against],
          turn: this.state.turn +1
        })
      }
      else{
        const combined = this.state[this.state.player2[0]] + this.state[this.state.turn]
        if (combined > this.state[against]) {

          const halfAgainstScore = this.state[against]/2
          this.setState({
            [this.state.turn]: this.state[this.state.turn] + (halfAgainstScore/2),
            [this.state[acceptFrom]]: this.state[acceptFrom] + (halfAgainstScore/2),
            [against]: halfAgainstScore,
            turn: this.state.turn +1,
            player2: null
          })
        }
      }  ;
    break;
    case 'player3':
      if (this.state.player3 === null) {
        this.setState({
          player3: [this.state.turn, against],
          turn: this.state.turn + 1
        })
      }
      else{
        const combined = this.state[this.state.player3[0]] + this.state[this.state.turn]
        if (combined > this.state[against]) {

          const halfAgainstScore = this.state[against]/2
          this.setState({
            [this.state.turn]: this.state[this.state.turn] + (halfAgainstScore/2),
            [this.state[acceptFrom]]: this.state[acceptFrom] + (halfAgainstScore/2),
            [against]: halfAgainstScore,
            turn: this.state.turn +1,
            player3: null
          })
        }
      } ;
    break;
    case 'player4':
      if (this.state.player4 === null) {
        this.setState({
          player4: [this.state.turn, against],
          turn: this.state.turn +1
        })
      }
      else{
        const combined = this.state[this.state.player4[0]] + this.state[this.state.turn]
        if (combined > this.state[against]) {

          const halfAgainstScore = this.state[against]/2
          this.setState({
            [this.state.turn]: this.state[this.state.turn] + (halfAgainstScore/2),
            [this.state[acceptFrom]]: this.state[acceptFrom] + (halfAgainstScore/2),
            [against]: halfAgainstScore,
            turn: this.state.turn +1,
            player4: null
          })
        }
      } ;
    break;
  }

}

  render() {

    return (
/*For setting the initial score at the beggining of play
*/
      <div >
        <div style={turnColor(this.state.turn)}>players turn:{this.state.turn +1}<Score score={this.state[Object.keys(this.state)[this.state.turn]]} onClick={() => this.increaseScore(this.state.turn)} number={this.state.score} /></div>
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

        {colludeDisplay(this.state.turn, this.state.player1, this.state.player2, this.state.player3, this.state.player4, this.collude)}

      </div>
    )
    /*Passes the collusion offer to the collude method with who the offer is to and who the offer is against/will be steailing from
    the offer is always from the current player or this.state.turn at the time of the offer */

  }
}
