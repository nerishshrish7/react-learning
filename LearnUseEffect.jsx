import { useState, useEffect } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(2);
  const [date,setDate] = useState(new Date());

useEffect(()=>{
    // console.log('i am useeffect');
    setInterval(() => {
        setDate(new Date());
    },1000);
 
},[]);
console.log(date);

  const increment = () => {
    setCount(count + 1);
  };

  const randomNum = ()=>{
    const random = Math.floor(Math.random()*100);
    setRandom(random);
}

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <p>{random}</p>

      <button onClick={randomNum}>Random</button>
    </div>
  );
};

export default Counter;
