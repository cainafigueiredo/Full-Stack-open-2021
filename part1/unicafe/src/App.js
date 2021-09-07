import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.title}</button>
  );
}; 

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  );
};

const Statistics = (props) => {
  let value = <p>No feedback given</p>
  if (props.sum != 0) {
    value = 
      <div>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="all" value={props.sum}/>
        <StatisticLine text="average" value={props.average}/>
        <StatisticLine text="positive" value={props.posPercent}/>
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