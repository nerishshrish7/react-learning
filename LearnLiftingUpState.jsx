/* eslint-disable react/prop-types */

const LearnLiftingUpState = (props) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log('hi')
        props.myClick("This is coming from child")
    }
  return (
    <div>
        <button onClick={handleSubmit}>Click Me</button>
        
    </div>
  )
}

export default LearnLiftingUpState
