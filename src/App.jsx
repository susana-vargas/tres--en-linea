import { ButtonGrid } from './ButtonGrid';
import { useState } from 'react';

export const App = () => {
  const [turnUser1, setTurnUser1] = useState(true);
  const [boxesPlayerOne, setBoxesPlayerOne] = useState([]);
  const [boxesPlayerTwo, setBoxesPlayerTwo] = useState([]);

  const toggleTurn = () => {
    setTurnUser1(!turnUser1);
  };


  const checkIfWinner = (userBoxes) => {
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

    return isWinner;
  };
  
  // const isWinner1 = checkIfWinner();
  // console.log(isWinner1);

  const addBox = (id) => {
    const user = turnUser1 ? 'usuario 1' : 'usuario 2';
    console.log('la casilla ' + id + ' se agrega al ' + user);

    if (turnUser1) {
      const newBoxesPlayerOne = boxesPlayerOne.map((box) => box)
      newBoxesPlayerOne.push(id);
      setBoxesPlayerOne(newBoxesPlayerOne)
      console.log(newBoxesPlayerOne,user);
      checkIfWinner(newBoxesPlayerOne)
    } else {
      const newBoxesPlayerTwo = boxesPlayerTwo.map((box) => box)
      newBoxesPlayerTwo.push(id)
      setBoxesPlayerTwo(newBoxesPlayerTwo)
      console.log(newBoxesPlayerTwo,user);
      checkIfWinner(newBoxesPlayerTwo)
    }

  }
  
  // if (isWinner1 === true) {
  //   console.log('Ha Ganado!');
  // }


  return (
    <div>
      <h1>Three in a Row</h1>
      <ButtonGrid toggleTurn={toggleTurn} turnUser1={turnUser1} addBox={addBox} />
    </div>
  );
};
