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
      <div className="honestDay" onClick={this.handleWork}>Honest Days Work</div>
    )
  }
}
