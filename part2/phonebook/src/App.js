import React, { useState } from 'react';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter';

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
      <Filter filter={filter} onChangeFilter={handleFilterChange}/>
      
      <h2>add new</h2>
      <PersonForm 
        onSubmit={addPerson} 
        name={newName} 
        number={newNumber} 
        onChangeName={handlePersonNameChange}
        onChangeNumber={handlePersonNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  );
}

export default App;
