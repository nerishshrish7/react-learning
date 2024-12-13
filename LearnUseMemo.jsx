import { useState, useMemo } from 'react';

const LearnUseMemo = () => {
    const [count, setCount] = useState(0);
  const [random, setRandom] = useState(2);

const check = useMemo (()=>{
    console.log('i am useMemo');
    if(count == 7){
        return "Yes";
    }
    else{
        return "No";
    }
 
},[count]);

const increment = () => {
    setCount(count + 1);
  };

  const randomNum = ()=>{
    const random = Math.floor(Math.random()*100);
    setRandom(random);
}

const decrease = () =>{
    if(count > 0){
        setCount(count-1);
    }
}

  return (
    <div>
      <p>{count} Is count is 7?{check}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrease}>Decrease</button>

      <p>{random}</p>
      <button onClick={randomNum}>Random</button>
    </div>
  )
}

export default LearnUseMemo
