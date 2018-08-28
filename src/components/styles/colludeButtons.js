import React from 'react';

/* This function renders the button for accepting collusion offers only when they are available.
The turn param is set at the current player's turn. The function then checks if that player has
an offer on the table. If they do the "Accept Offer" button is then rendered.
*/
export function whosColluding(turn, player1, player2, player3, player4, handleCollusion){
  switch(turn) {
    case 0:
      if (player1 != null) {
        return<input type="button" value="Accept Offer" onClick={handleCollusion}></input>
      };
    break;
    case 1:
      if (player2 != null) {
        return<input type="button" value="Accept Offer" onClick={handleCollusion}></input>
      } ;
    break;
    case 2:
      if (player3 != null) {
        return<input type="button" value="Accept Offer" onClick={handleCollusion}></input>
      } ;
    break;
    case 3:
      if (player4 != null) {
        return<input type="button"value="Accept Offer" onClick={handleCollusion}></input>
      } ;
    break;
  }
}
