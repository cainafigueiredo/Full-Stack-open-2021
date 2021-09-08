import React from "react";

const Total = (props) => {
    //<Total parts={course.parts}/>
    const exercises = props.parts.map(part => part.exercises);
    const total = exercises.reduce((accumulator, curr) => accumulator+curr);
    return (
      <p>Number of exercises {total}</p>
    ); 
};

export default Total;