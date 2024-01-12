import { ButtonGrid } from './ButtonGrid';
import { useState } from 'react';

export const App = () => {
  const [turnUser1, setTurnUser1] = useState(true);
  const [boxesPlayerOne, setBoxesPlayerOne] = useState([]);
  const [boxesPlayerTwo, setBoxesPlayerTwo] = useState([]);
  const [winner, setWinner] = useState('');

  const toggleTurn = () => {
    setTurnUser1(!turnUser1);
  };

  const checkIfWinner = (userBoxes, card) => {
    console.log('checkIfWinner', userBoxes);
    const winCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [7, 5, 3],
    ];

    let i3 = 0;
    let isWinner = false;

    while (i3 < winCombinations.length) {
      const winCombination = winCombinations[i3];

      const userWinBoxes = [];
      let i1 = 0;

      while (i1 < winCombination.length) {
        const winElement = winCombination[i1];

        let i2 = 0;
        while (i2 < userBoxes.length) {
          const userBox = userBoxes[i2];

          if (winElement === userBox) {
            userWinBoxes.push(userBox);
          }

          if (userWinBoxes.length === 3) {
            isWinner = true;
          }

          i2++;
        }

        i1++;
      }

      i3++;
    }

    if (isWinner) {
      console.log('is winner', card);
      setWinner(card);
    }
  };

  const addBox = (id) => {
    if (turnUser1) {
      const newBoxesPlayerOne = boxesPlayerOne.concat(id);
      setBoxesPlayerOne(newBoxesPlayerOne);
      return newBoxesPlayerOne;
    } else {
      const newBoxesPlayerTwo = boxesPlayerTwo.concat(id);
      setBoxesPlayerTwo(newBoxesPlayerTwo);
      return newBoxesPlayerTwo;
    }
  };

  return (
    <div>
      <h1>Three in a Row</h1>
      {winner ? <h1>The Winner is: "{winner}"</h1> : null}
      <ButtonGrid
        toggleTurn={toggleTurn}
        turnUser1={turnUser1}
        addBox={addBox}
        checkIfWinner={checkIfWinner}
      />
    </div>
  );
};
