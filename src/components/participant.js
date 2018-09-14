import React from 'react';
import {Score} from './points.js';
import {turnColor} from './styles/turns.js';
import {Steal} from './steal.js'
import {Collude} from './collude.js'
import {colludeDisplay} from './styles/colludeDisplay.js'
import {TaxTheft} from './taxTheft.js'
import {HonestDay} from './honestDay.js'
import {Victory} from './victory.js'

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
        [player]: (robbedScore),
        [this.state.turn]: currentScore + robbedScore,
        kitty: this.state.kitty + robbedScore*.7
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
    } else{
      const lowRobbedScore = this.state[player]*.90
      const currentScore = this.state[this.state.turn]
      this.setState({
        [player]: lowRobbedScore,
        [this.state.turn]: currentScore + (this.state[player] - lowRobbedScore),
        kitty: this.state.kitty + lowRobbedScore*.15
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
          player1: [this.state.turn, against]
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
      else if(against === "decline"){
        this.setState({
          player1: null
        })
      }
      else{
        const combined = this.state[this.state.player1[0]] + this.state[this.state.turn]
        if (combined > this.state[against]) {

          const halfAgainstScore = this.state[against]/2
          this.setState({
            [this.state.turn]: this.state[this.state.turn] + (halfAgainstScore/2),
            [acceptFrom]: this.state[acceptFrom] + (halfAgainstScore/2),
            [against]: halfAgainstScore,
            player1: null,
            kitty: halfAgainstScore *.7 + this.state.kitty
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
      };
    break;
    case 'player2':
      if (this.state.player2 === null) {
        this.setState({
          player2: [this.state.turn, against]
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
      else if(against === "decline"){
        this.setState({
          player2: null
        })
      }
      else{
        const combined = this.state[this.state.player2[0]] + this.state[this.state.turn]
        if (combined > this.state[against]) {

          const halfAgainstScore = this.state[against]/2
          this.setState({
            [this.state.turn]: this.state[this.state.turn] + (halfAgainstScore/2),
            [acceptFrom]: this.state[acceptFrom] + (halfAgainstScore/2),
            [against]: halfAgainstScore,
            player2: null,
            kitty: halfAgainstScore *.7 + this.state.kitty
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
      }  ;
    break;
    case 'player3':
      if (this.state.player3 === null) {
        this.setState({
          player3: [this.state.turn, against]
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
      else if(against === "decline"){
        this.setState({
          player3: null
        })
      }
      else{
        const combined = this.state[this.state.player3[0]] + this.state[this.state.turn]
        if (combined > this.state[against]) {

          const halfAgainstScore = this.state[against]/2
          this.setState({
            [this.state.turn]: this.state[this.state.turn] + (halfAgainstScore/2),
            [acceptFrom]: this.state[acceptFrom] + (halfAgainstScore/2),
            [against]: halfAgainstScore,
            player3: null,
            kitty: halfAgainstScore *.7 + this.state.kitty
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
      } ;
    break;
    case 'player4':
      if (this.state.player4 === null) {
        this.setState({
          player4: [this.state.turn, against]
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
      else if(against === "decline"){
        this.setState({
          player4: null
        })
      }
      else{
        const combined = this.state[this.state.player4[0]] + this.state[this.state.turn]
        if (combined > this.state[against]) {

          const halfAgainstScore = this.state[against]/2
          this.setState({
            [this.state.turn]: this.state[this.state.turn] + (halfAgainstScore/2),
            [acceptFrom]: this.state[acceptFrom] + (halfAgainstScore/2),
            [against]: halfAgainstScore,
            player4: null,
            kitty: halfAgainstScore *.7 + this.state.kitty
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
      } ;
    break;
  }


}

robKitty() {
  const willRob = Math.random();
  if(willRob > .7) {
    this.setState({
      [this.state.turn]: this.state[this.state.turn]+ this.state.kitty,
      kitty: 0
    })
  } else {
    this.setState({
      [this.state.turn]: 0
    })
  }
  if(this.state.turn < 3) {
    this.setState({turn: this.state.turn + 1})
  }else{
    this.setState({turn: 0})
  }
}

honestDay(){
  this.setState({
    [this.state.turn]: this.state[this.state.turn] + 10,
    kitty: this.state.kitty +10
  })
  if(this.state.turn < 3 ) {
    this.setState({turn: this.state.turn + 1})
  }else {
    this.setState({turn: 0})
  }
}
  render() {

    return (
/*For setting the initial score at the beggining of play
*/
      <div >
        <Victory player1={this.state[0]} player2={this.state[1]} player3={this.state[2]} player4={this.state[3]} currentScore={this.state[this.state.turn]} />
        <div style={turnColor(this.state.turn)} className="button"><span className="button_text">players turn:{this.state.turn +1}</span><Score score={this.state[Object.keys(this.state)[this.state.turn]]} onClick={() => this.increaseScore(this.state.turn)} number={this.state.score} /></div>
        <ol>
          <li className="score">Player 1: {parseFloat(this.state[0]).toFixed(2)}$</li>
          <li className="score">Player 2: {parseFloat(this.state[1]).toFixed(2)}$</li>
          <li className="score">Player 3: {parseFloat(this.state[2]).toFixed(2)}$</li>
          <li className="score">Player 4: {parseFloat(this.state[3]).toFixed(2)}$</li>
        </ol>

        <div style={turnColor(this.state.turn)}><span id="robbery">Steal from player:</span>
        <Steal onClick={() => this.stealScore(0)} number={0}/>
        <Steal onClick={() => this.stealScore(1)} number={1}/>
        <Steal onClick={() => this.stealScore(2)} number={2}/>
        <Steal onClick={() => this.stealScore(3)} number={3}/>

        </div>

        {colludeDisplay(this.state.turn, this.state.player1, this.state.player2, this.state.player3, this.state.player4, this.collude)}
        <div className="taxes">Uncle Sams Tax Pile: ${parseFloat(this.state.kitty).toFixed(2)}</div>
        <TaxTheft onClick={() => this.robKitty()} />
        <HonestDay onClick={() => this.honestDay()} />
      </div>
    )
    /*Passes the collusion offer to the collude method with who the offer is to and who the offer is against/will be steailing from
    the offer is always from the current player or this.state.turn at the time of the offer */

  }
}
