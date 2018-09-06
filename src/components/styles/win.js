import React from 'react';

export function victory(player1, player2, player3, player4, currentScore) {

    if(player1 > 500){
      return<div>Congrats player1! You won! </div>
    }
    else if (player2 > 500){
      return<div>Congrats player2! You won!</div>
    }
    else if(player3 > 500) {
      return<div>Congrats player3! You won!</div>
    }
    else if(player4 > 500){
      return<div>Congrats player4! You won!</div>
    }
    else{
      return<div>"Grow your conspiracy to 500$ for victory!"</div>
    }
}
