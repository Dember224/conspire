import React from 'react';
import {victory} from './styles/win.js'

export class Victory extends React.Component{


  render() {
    return(
      <div>
        {victory(this.props.player1, this.props.player2, this.props.player3, this.props.player4, this.props.currentScore)}
      </div>
    )
  }

}
