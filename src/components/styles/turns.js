import React from 'react';

export function turnColor(whosTurn) {
  switch(whosTurn) {
    case 0:
    return {backgroundColor: 'blue', borderRadius:40};
    break;
    case 1:
    return {backgroundColor: 'red'};
    break;
    case 2:
    return {backgroundColor: 'green'};
    break;
    case 3:
    return {backgroundColor: 'orange'};
  }
}
