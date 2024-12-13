import { useCallback, useState } from "react";
import RandomNum from "./RandomNum";

const LearnUseCallback = () => {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);
  
const generate = useCallback(() =>{
    const random = Math.floor(Math.random()*100);
    setRandom(random);
},[random]);

const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increase</button>

      <RandomNum random={random} generate={generate}/>
    </div>
  )
}

export default LearnUseCallback
