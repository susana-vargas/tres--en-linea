import { useState } from 'react';

export const Button = (props) => {
  const [occupied, setOccupied] = useState(false);
  const { id, toggleTurn, turnUser1, addBox } = props;
  const [card, setCard] = useState('');
  const user = turnUser1 ? 'x' : 'o';

  const handleClick = () => {
    if (occupied) {
      console.log('esta ocupado');
    } else {
      setOccupied(true);
      setCard(user);
      toggleTurn();
      addBox(id);
    }
  };
  

  return (
    <>
      <button style={{ fontSize: '90px' }} onClick={handleClick} id={id}>
        {card}
      </button>
    </>
  );
};
