import { useEffect, useState } from 'react';
import { Button } from "../components";
import { getExcuses } from "../api/excuses";

function Home() {
  const [excuses, setExcuses] = useState([])
  const [excuse, setExcuse] = useState('')

  useEffect(() => {
    getExcuses().then((data) => setExcuses(data))
  }, [])
  
  return (
    <div className='application'>
      <h1>Excuse de dev</h1>
      <p>{excuse}</p>
      <Button excuses={excuses} onClick={(e) => setExcuse(e)} />
    </div>
  );
}

export default Home;
