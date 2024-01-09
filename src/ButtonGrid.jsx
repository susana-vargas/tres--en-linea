import './styles.css';
import { Button } from './Button';

export const ButtonGrid = () => {
  const buttons = []
  
  let i = 1
  while(i <= 9) {
    buttons.push(<Button key={i} id={i}/>)
    i++;
  }
  
  return (
    <div className="button-container">
      {buttons}
    </div>
  );
};
