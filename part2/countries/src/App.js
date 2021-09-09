import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Country = ({country}) => {
  return (
    <div>
      <h1>{country.name}</h1>
      capital {country.capital}<br/>
      population {country.population}

      <h2>languages</h2>
      <ul>
        {country.languages.map(lang => <li>{lang.name}</li>)}
      </ul>
      <img src={country.flag} width="200px"/>
    </div>
  );
}

const CountriesList = ({countries}) => {
  return (
    <div>
      {
        countries.length > 10?
          <p>Too many matches, specify another filter</p> :
          countries.map(country => <p>{country.name}</p>)
      }
    </div>
  );
}

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data);
    })
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  } 

  const countriesToShow = filter === '' ? 
    countries : 
    countries.filter(country => country.name.toLowerCase().includes(`${filter.toLowerCase()}`));

  return (
    <div>
      find countries <input value={filter} onChange={handleFilterChange}/>
      <div>
        {
          countriesToShow.length === 1 ?
            <Country country={countriesToShow[0]}/> :
            <CountriesList countries={countriesToShow}/>
        }
      </div>
    </div>
  );
}

export default App;
