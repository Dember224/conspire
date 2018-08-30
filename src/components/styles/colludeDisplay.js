import React from 'react';
import {Collude} from '../collude.js'

export function colludeDisplay(turn, player1, player2, player3, player4, collude) {
  switch (turn){
    case 0:
      if (player1 === null) {
        return(
          <div>
            <Collude onClick={() => collude('player2', 2)} offerTo='player2 against 3' turn={turn} player2={player2} />
            <Collude onClick={() => collude('player2', 3)} offerTo='player2 against 4' turn={turn} player2={player2} />
            <Collude onClick={() => collude('player3', 1)} offerTo='player3 against 2' turn={turn} player3={player3} />
            <Collude onClick={() => collude('player3', 3)} offerTo='player3 against 4' turn={turn} player3={player3} />
            <Collude onClick={() => collude('player4', 1)} offerTo='player4 against 2' turn={turn} player4={player4}/>
            <Collude onClick={() => collude('player4', 2)} offerTo='player4 against 3' turn={turn} player4={player4}/>
            </div>
          );
        } else{
          return(
            <div>
              <Collude onClick={() => collude('player1', player1[1], player1[0])} turn={turn} player1={player1} player2={player2} player3={player3} player4={player4}/>
            </div>
          )
        };
    break;
    case 1:
      if (player2 === null) {
        return(
        <div>
          <Collude onClick={() => collude('player1', 2)} offerTo='player1 against 3' turn={turn} player1={player1}  />
          <Collude onClick={() => collude('player1', 3)} offerTo='player1 against 4' turn={turn} player1={player1} />
          <Collude onClick={() => collude('player3', 0)} offerTo='player3 against 1' turn={turn} player3={player3} />
          <Collude onClick={() => collude('player3', 3)} offerTo='player3 against 4' turn={turn} player3={player3} />
          <Collude onClick={() => collude('player4', 0)} offerTo='player4 against 1' turn={turn} player4={player4}/>
          <Collude onClick={() => collude('player4', 2)} offerTo='player4 against 3' turn={turn} player4={player4}/>
        </div>
      )
      } else {
          return(
          <div>
            <Collude onClick={() => collude('player2', player2[1], player2[0])} turn={turn} player1={player1} player2={player2} player3={player3} player4={player4}/>
          </div>
            )
        };
        break;
        case 2:
          if(player3 === null) {
            return(
              <div>
                <Collude onClick={() => collude('player1', 1)} offerTo='player1 against 2' turn={turn} player1={player1}  />
                <Collude onClick={() => collude('player1', 3)} offerTo='player1 against 4' turn={turn} player1={player1} />
                <Collude onClick={() => collude('player2', 0)} offerTo='player2 against 1' turn={turn} player2={player2} />
                <Collude onClick={() => collude('player2', 3)} offerTo='player2 against 4' turn={turn} player2={player2} />
                <Collude onClick={() => collude('player4', 0)} offerTo='player4 against 1' turn={turn} player4={player4}/>
                <Collude onClick={() => collude('player4', 1)} offerTo='player4 against 2' turn={turn} player4={player4}/>
              </div>
            )
          } else{
            return(
              <div>
                <Collude onClick={() => collude('player3', player3[1], player3[0])} turn={turn} player1={player1} player2={player2} player3={player3} player4={player4}/>
              </div>
            )
          }
        break;
        case 3:
          if(player4 === null) {
            return(
              <div>
                <Collude onClick={() => collude('player1', 1)} offerTo='player1 against 2' turn={turn} player1={player1}  />
                <Collude onClick={() => collude('player1', 2)} offerTo='player1 against 3' turn={turn} player1={player1}  />
                <Collude onClick={() => collude('player2', 0)} offerTo='player2 against 1' turn={turn} player2={player2} />
                <Collude onClick={() => collude('player2', 2)} offerTo='player2 against 3' turn={turn} player2={player2} />
                <Collude onClick={() => collude('player3', 0)} offerTo='player3 against 1' turn={turn} player3={player3} />
                <Collude onClick={() => collude('player3', 1)} offerTo='player3 against 2' turn={turn} player3={player3} />
              </div>
            )
          }else {
            return(
              <div>
                <Collude onClick={() => collude('player4', player4[1], player4[0])} turn={turn} player1={player1} player2={player2} player3={player3} player4={player4} />
              </div>
            )
          }
  }
}
