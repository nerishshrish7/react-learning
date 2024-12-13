import { useState } from "react";

const LearnUseState = () => {
    const [counter, setCounter] = useState(0);
    const [random, setRandom] = useState(0);

    const increase = ()=>{
        setCounter(counter+1);
    }
    const decrease = () =>{
        if(counter > 0){
            setCounter(counter-1);
        }
    }

    const randomNum = ()=>{
        const random = Math.floor(Math.random()*100);
        setRandom(random);
    }


    
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>

      <h1>Random: {random}</h1>
      <button onClick={randomNum}>Generate</button>
    </div>
  )
}

export default LearnUseState;
