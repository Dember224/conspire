import React from 'react';
import {whosColluding} from './styles/colludeButtons.js'

export class Collude extends React.Component{
  handleCollusion(e) {
    const makeOffer = e.target.value;
    this.props.onClick(makeOffer);
  }


  constructor(props) {
    super(props);
    this.handleCollusion = this.handleCollusion.bind(this);
  }



  render() {
    return (
      <div>
      Collude with:
        <div className="collude" onClick={this.handleCollusion}>{this.props.offerTo}</div>
          {whosColluding(this.props.turn, this.props.player1, this.props.player2, this.props.player3, this.props.player4, this.handleCollusion)}
        {this.props.player1} {this.props.player2} {this.props.player3} {this.props.player4}
      </div>
    )

  }

}
