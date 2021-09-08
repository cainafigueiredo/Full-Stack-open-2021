import React, { useState } from 'react';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const personsToShow = filter === '' ? persons : persons.filter(x => {
    return (x.name.toLowerCase().match(new RegExp(`^${filter.toLowerCase()}`)) !== null);
  });

  const addPerson = (event) => {
    event.preventDefault();
    const allNames = persons.map(x => x.name)
    if (allNames.indexOf(newName) === -1) {
      const personObject = {name: newName, number: newNumber};
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const handlePersonNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePersonNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={filter} onChange={handleFilterChange}/>
      <h2>add new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handlePersonNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handlePersonNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(x => <p key={x.name}>{x.name} {x.number}</p>)}
    </div>
  );
}

export default App;
