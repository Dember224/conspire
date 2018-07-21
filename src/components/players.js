import React from 'react';
import ReactDom from 'react-dom';
import {Score} from './points.js'
import {Participant} from './participant.js'

export class Player extends React.Component {

//Rendering the score passed from the Score component
//Need to make all four buttons keep score individually
  render() {
    return (
      <div>
        {<Participant />}
      </div>
    )
  }
}

ReactDom.render(
	<Player />,
	document.getElementById('root'))
