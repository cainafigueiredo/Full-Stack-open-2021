import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.title}</button>
  );
}; 

const Statistics = (props) => {
  let value = <p>No feedback given</p>
  if (props.sum != 0) {
    value = 
      <div>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.sum}</p>
        <p>average {props.average}</p>
        <p>positive {props.posPercent}</p>
      </div>;
  };

  return value;
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
    return (good - bad)/sumFeedbacks();
  }

  const positivePercentFeedbacks = () => {
    return good/sumFeedbacks();
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button title="good" onClick={handleClick(good,setGood)}></Button>
      <Button title="neutral" onClick={handleClick(neutral,setNeutral)}></Button>
      <Button title="bad" onClick={handleClick(bad,setBad)}></Button>
      
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        sum={sumFeedbacks()} 
        average={averageFeedbacks()}
        posPercent={`${positivePercentFeedbacks()*100} %`}/>
    </div>
  )
}

export default App