import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.title}</button>
  );
}; 

const Statistics = (props) => {
  return (
    <p>{props.text} {props.value}</p>
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

  const sumFeedbacks = () => {
    return (
      good + neutral + bad
    );
  };

  const averageFeedbacks = () => {
    const value = sumFeedbacks()==0?0:(good - bad)/sumFeedbacks();
    return value;
  }

  const positivePercentFeedbacks = () => {
    const value = sumFeedbacks()==0?0:good/sumFeedbacks();
    return value;
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button title="good" onClick={handleClick(good,setGood)}></Button>
      <Button title="neutral" onClick={handleClick(neutral,setNeutral)}></Button>
      <Button title="bad" onClick={handleClick(bad,setBad)}></Button>
      
      <h1>statistics</h1>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={sumFeedbacks()} />
      <Statistics text="average" value={averageFeedbacks()} />
      <Statistics text="positive" value={`${positivePercentFeedbacks()*100} %`}/>
    </div>
  )
}

export default App