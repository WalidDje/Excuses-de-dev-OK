import { useState } from 'react'

function Button({ excuses, onClick }) {
  const [lastIndex, setLastIndex] = useState()

  const handleClick = () => {
    let index

    while (!index || index === lastIndex)
      index = Math.floor(Math.random() * excuses.length);

    const excuse = excuses[index];

    setLastIndex(index);
    onClick(excuse.message)
  }

  return (
    <button onClick={handleClick}>Générer une excuse</button>
  );
}

export default Button;
