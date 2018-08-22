import React from 'react';
import {Score} from './points.js';
import {turnColor} from './styles/turns.js';
import {Steal} from './steal.js'
import {Collude} from './collude.js'


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

collude(player, against) {
  switch(player) {
    case 'player1':
      if (this.state.player1 === null) {
        this.setState({
          player1: [this.state.turn, against]
        })
      };
    break;
    case 'player2':
      if (this.state.player2 === null) {
        this.setState({
          player2: [this.state.turn, against]
        })
      }  ;
    break;
    case 'player3':
      if (this.state.player3 === null) {
        this.setState({
          player3: [this.state.turn, against]
        })
      } ;
    break;
    case 'player4':
      if (this.state.player4 === null) {
        this.setState({
          player4: [this.state.turn, against]
        })
      } ;
    break;
  }

}

  render() {
    <Collude />
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


        <Collude onClick={() => this.collude('player1', 1)} offerTo='player1 against 2' turn={this.state.turn} player1={this.state.player1}  />
        <Collude onClick={() => this.collude('player1', 2)} offerTo='player1 against 3' turn={this.state.turn} player1={this.state.player1}  />
        <Collude onClick={() => this.collude('player1', 3)} offerTo='player1 against 4' turn={this.state.turn} player1={this.state.player1} />

        <Collude onClick={() => this.collude('player2', 0)} offerTo='player2 against 1' turn={this.state.turn} player2={this.state.player2} />
        <Collude onClick={() => this.collude('player2', 2)} offerTo='player2 against 3' turn={this.state.turn} player2={this.state.player2} />
        <Collude onClick={() => this.collude('player2', 3)} offerTo='player2 against 4' turn={this.state.turn} player2={this.state.player2} />

        <Collude onClick={() => this.collude('player3', 0)} offerTo='player3 against 1' turn={this.state.turn} player3={this.state.player3} />
        <Collude onClick={() => this.collude('player3', 1)} offerTo='player3 against 2' turn={this.state.turn} player3={this.state.player3} />
        <Collude onClick={() => this.collude('player3', 3)} offerTo='player3 against 4' turn={this.state.turn} player3={this.state.player3} />

        <Collude onClick={() => this.collude('player4', 0)} offerTo='player4 against 1' turn={this.state.turn} player4={this.state.player4}/>
        <Collude onClick={() => this.collude('player4', 1)} offerTo='player4 against 2' turn={this.state.turn} player4={this.state.player4}/>
        <Collude onClick={() => this.collude('player4', 2)} offerTo='player4 against 3' turn={this.state.turn} player4={this.state.player4}/>
      </div>
    )
  }

  }
