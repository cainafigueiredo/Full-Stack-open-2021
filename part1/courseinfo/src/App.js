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
  const exercises = props.parts.map(part => part.exercises);
  const total = exercises.reduce((accumulator, curr) => accumulator+curr);
  return (
    <p>Number of exercises {total}</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name:'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App;