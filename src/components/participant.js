import React from 'react';
import {Score} from './points.js';


export class Participant extends React.Component{

  constructor(props){
    super(props);
    //setting initial score
  this.state = {
    0:0,
    1:0,
    2:0,
    3:0,

  }


    this.increaseScore = this.increaseScore.bind(this);
  };
//gives more points to a player
  increaseScore(morePoints) {
    this.setState({
      [this.state.number]: this.state[Object.keys(this.state)[this.state.number]] + 1
    });
  }

  render() {
    const playerNumber = [0, 1, 2, 3]
    return (
/*iterates through and makes 4 score keeping buttons. Inteded to increase each players score independently.
Avoiding re-writing code for each player as the scoring mechanism gets more sophisticated when i build the game out.
*/
      <ul>
        {playerNumber.map(i => {
            {this.state.number = i}
          return <li key={i}>player:{i}<Score score={this.state[Object.keys(this.state)[i]]} onClick={this.increaseScore} number={this.state.number} key={i}  />{this.props.number}</li>
        })}
        <li>{this.props.number}</li>
      </ul>
    )
  }
//Still doesn't work. Map iterates through replacing "number" only allowing the last player's score to increase
  }
