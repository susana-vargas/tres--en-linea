import { useState } from "react"

export const Button = (props) => {
  const [occupied, setOccupied] = useState(false);
  const {id} = props;
  
  const handleClick = () => {

    if(!occupied) {
      console.log('no esta ocupado')
      setOccupied(true)
    } else {
      console.log('esta ocupado')
    }
  }

  return <>
  <button onClick={handleClick} id={id}></button>
  </>
}
