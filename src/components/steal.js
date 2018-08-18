import React from 'react';

export class Steal extends React.Component {
  handleSteal(e) {
    const transferPoints = e.target.value;
    this.props.onClick(transferPoints);
  }

  constructor(props) {
    super(props);
    this.handleSteal = this.handleSteal.bind(this);
  }

  render() {
    return(
    <div>
      <input type="button" value={this.props.number} onClick={this.handleSteal}></input>
    </div>
  )
  }
}
