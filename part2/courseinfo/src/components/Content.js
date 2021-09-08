import React from "react";
import Part from './Part'

const Content = (props) => {
    const content = props.parts.map(x => <Part key={x.id} part={x.name} exercises={x.exercises}/>);
    return (
      <>
        {content}
      </>
    );
};

export default Content;