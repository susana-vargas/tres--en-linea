import './styles.css';
import { Button } from './Button';

export const ButtonGrid = (props) => {
  const { toggleTurn, turnUser1 } = props;
  const buttons = [];

  let i = 1;
  while (i <= 9) {
    buttons.push(
      <Button toggleTurn={toggleTurn} turnUser1={turnUser1} key={i} id={i} />
    );
    i++;
  }

  return <div className="button-container">{buttons}</div>;
};
