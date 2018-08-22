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
        <input type="button" value={this.props.offerTo} onClick={this.handleCollusion}></input>

        {this.props.player1} {this.props.player2} {this.props.player3} {this.props.player4}
      </div>
    )

  }

}
