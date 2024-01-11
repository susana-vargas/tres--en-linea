import { ButtonGrid } from './ButtonGrid';
import { useState } from 'react';

export const App = () => {
  const [turnUser1, setTurnUser1] = useState(true);
  const [boxesPlayerOne, setBoxesPlayerOne] = useState([]);
  const [boxesPlayerTwo, setBoxesPlayerTwo] = useState([]);

  const toggleTurn = () => {
    setTurnUser1(!turnUser1);
  };

  const addBox = (id) => {
    const user = turnUser1 ? 'usuario 1' : 'usuario 2';
    console.log('la casilla ' + id + ' se agrega al ' + user);

    if (turnUser1) {
      const newBoxesPlayerOne = boxesPlayerOne.map((box) => box)
      newBoxesPlayerOne.push(id);
      setBoxesPlayerOne(newBoxesPlayerOne)
      console.log(newBoxesPlayerOne,user);  
    } else {
      const newBoxesPlayerTwo = boxesPlayerTwo.map((box) => box)
      newBoxesPlayerTwo.push(id)
      setBoxesPlayerTwo(newBoxesPlayerTwo)
      console.log(newBoxesPlayerTwo,user);
    }
    
  }
  
  return (
    <div>
      <h1>Three in a Row</h1>
      <ButtonGrid toggleTurn={toggleTurn} turnUser1={turnUser1} addBox={addBox} />
    </div>
  );
};
