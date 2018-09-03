import React from 'react';

export class HonestDay extends React.Component {
  handleWork(e) {
    const workHard = e.target.value;
    this.props.onClick(workHard);
  }

  constructor(props) {
    super(props);
    this.handleWork = this.handleWork.bind(this);
  }

  render() {
    return (
      <input type="button" value="Honest Day's Work" onClick={this.handleWork}></input>
    )
  }
}
