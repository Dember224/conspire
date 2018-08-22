import React from 'react';



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

      <div onClick={this.handleScore} number={this.props.number}>{this.props.score}$</div>
    )
  }
}
