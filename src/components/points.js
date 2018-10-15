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

      <div onClick={this.handleScore} number={this.props.number} className="button_score">{parseFloat(this.props.score).toFixed(2)}$ <p>Start</p></div>
    )
  }
}
