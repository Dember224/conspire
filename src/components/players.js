import React from 'react';
import ReactDom from 'react-dom';
import {Score} from './points.js'

export class Player extends React.Component {

  constructor(props){
    super(props);
    //setting initial score
    this.state = {score: 0}
    this.increaseScore = this.increaseScore.bind(this);
  };
//gives more points to a player
  increaseScore(morePoints) {
    let currentScore = this.state.score
    this.setState({
      score: currentScore + 1
    });
  }


//Rendering the score passed from the Score component
//Need to make all four buttons keep score individually
  render() {
    return (
      <div>
        <Score onScore={this.increaseScore} score={this.state.score} />
        <Score onScore={this.increaseScore} score={this.state.score} />
        <Score onScore={this.increaseScore} score={this.state.score} />
        <Score onScore={this.increaseScore} score={this.state.score} />
      </div>
    )
  }
}

ReactDom.render(
	<Player />,
	document.getElementById('root'))
