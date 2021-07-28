import React from 'react'

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  );
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  );
}

const Content = (props) => {
  const content = props.parts.map(x => <Part part={x.part} exercises={x.exercises}/>);
  return (
    <>
      {content}
    </>
  );
}

const Total = (props) => {
  const total = props.exercises.reduce((accumulator, curr) => accumulator+curr);
  return (
    <p>Number of exercises {total}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content parts={
        [
          {part:part1,exercises:exercises1}, 
          {part:part2,exercises:exercises2}, 
          {part:part3,exercises:exercises3}
        ]
      }/>
      <Total exercises={[exercises1,exercises2,exercises3]}/>
    </div>
  )
}

export default App;