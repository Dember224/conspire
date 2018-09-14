import React from 'react';
import {turnColor} from './styles/turns.js';

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
      <div className="steal" style={turnColor(this.props.number)} value={this.props.number} onClick={this.handleSteal}>{this.props.number +1}</div>
    </div>
  )
  }
}
