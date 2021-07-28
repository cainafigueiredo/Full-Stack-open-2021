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
  const content = props.parts.map(x => <Part part={x.name} exercises={x.exercises}/>);
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
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name:'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={
        [
          part2, 
          part3
        ]
      }/>
      <Total exercises={[part1.exercises,part2.exercises,part3.exercises]}/>
    </div>
  )
}

export default App;