import React from "react";

const Persons = ({persons}) => {
    return (
        <div>
            {persons.map(x => <p key={x.name}>{x.name} {x.number}</p>)}
        </div>
    );
};

export default Persons;