import React from "react";

const Total = (props) => {
    const exercises = props.parts.map(part => part.exercises);
    const total = exercises.reduce((accumulator, curr) => accumulator+curr);
    return (
      <p><b>total of {total} exercises</b></p>
    ); 
};

export default Total;