import React from 'react';
import ReactDom from 'react-dom';
import {Score} from './points.js'

export class Player extends React.Component {

  constructor(props){
    super(props);
    //setting initial score
    this.state = {score: 0};
    this.increaseScore = this.increaseScore.bind(this);
  };

  increaseScore(morePoints) {
    let currentScore = this.state.score
    this.setState({
      score: currentScore ++
    });
  }

//Rendering the score passed from the Score component
  render() {
    return(
      <div>
        <Score onScore={this.increaseScore} />
      </div>
    )
  }
}

ReactDom.render(
	<Player />,
	document.getElementById('root'))
