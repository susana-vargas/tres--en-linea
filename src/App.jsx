import { ButtonGrid } from './ButtonGrid';
import { useState } from 'react';

export const App = () => {
  const [turnUser1, setTurnUser1] = useState(true);
  const playerOne = [];

  const toggleTurn = () => {
    setTurnUser1(!turnUser1);
  };

  return (
    <div>
      <h1>Three in a Row</h1>
      <ButtonGrid toggleTurn={toggleTurn} turnUser1={turnUser1} />
    </div>
  );
};
