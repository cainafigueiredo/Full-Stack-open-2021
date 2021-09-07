import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.title}</button>
  );
}; 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (value, setFunction) => {
    return () => {setFunction(value+1)};
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button title="good" onClick={handleClick(good,setGood)}></Button>
      <Button title="neutral" onClick={handleClick(neutral,setNeutral)}></Button>
      <Button title="bad" onClick={handleClick(bad,setBad)}></Button>
      
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App