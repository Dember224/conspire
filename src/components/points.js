import React from 'react';
import {Participant} from './participant.js';


export class Score extends React.Component {
  //this component is meant to handle events that increase score
  handleScore(e) {
    const morePoints = e.target.value;
    this.props.onClick(morePoints);
  }
  constructor(props) {
    super(props);
    this.handleScore = this.handleScore.bind(this);
  }

  render() {

    return (

      <button onClick={this.handleScore} number={this.props.number}>{this.props.score}</button>
    )
  }
}
