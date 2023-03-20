import { useEffect, useState } from 'react';
import { Button, PostModal } from "../components";
import { getExcuses } from "../api/excuses";

function Home() {
  const [excuses, setExcuses] = useState([])
  const [excuse, setExcuse] = useState('')

  useEffect(() => {
    getExcuses().then((data) => setExcuses(data))
  }, [])
  
  return (
    <div>
      <div className='application px-5'>
        <h1>Excuse de dev</h1>
        <p className='py-2'>{excuse}</p>
        <Button excuses={excuses} onClick={(e) => setExcuse(e)} />
      </div>
      <PostModal />
    </div>
  );
}

export default Home;
