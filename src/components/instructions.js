import React from 'react';
import ReactDom from 'react-dom';

export class Instructions extends React.Component {

  render() {
    return (
      <div>
        <h1>Instructions</h1>
        <ol>
          <li>Your goal is to reach $500 before all other players</li>
          <li>If you have '$0' the start button gives you between '0$' and '$100'</li>
          <li>If you have more than '$0' the start button skips your turn</li>
          <li>Use the 'Steal from' buttons to steal from other players</li>
          <li>If a player has more money than you stealing only takes a little cash</li>
          <li>If a player has less money than you stealing takes a large chunk of change</li>
          <li>You can offer to collude with playerX against playerY at any time. But making the offer uses a turn</li>
          <li>When recieving a collusion offer you can accept or decline to collude</li>
          <li>If you accept the collusion will rob the target of half of their money to split among the colluders only if the total of the colluders money is greater than the targets money</li>
          <li>Declining to collude does not use a turn</li>
          <li>The honest days work button gives the player '10$' and uses their turn</li>
          <li>At any point you can attempt to rob uncle sam. An ever growing jackpot total at the bottom of your screen. But be careful, if you get caught your total dollars will be reset to '0$'</li>
        </ol>
      </div>
    )
  }
}
