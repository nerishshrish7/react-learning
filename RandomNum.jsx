import { memo } from "react";

const RandomNum = memo(
    ({random,generate}) => {
        console.log('Data Rendered');
    
      return (
        <div>
          <p>{random}</p>
          <button onClick={generate}>Random</button>
        </div>
      )
    }
)

export default RandomNum
