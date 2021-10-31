import React from 'react';
import ReactDOM from 'react-dom';

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

const headerStyles = {
  marginBottom: 20,
  textAlign: 'center',
}

const Country = (props) => {
  const {country, population} = props.country
  const max = props.max

  let percentage = (population * 100) / max
  
  return (
    <div style={{width: '100%', display: 'inline-block'}}>
      <div style={{display: 'inline-block', width: '15%'}}>{country}</div>
      <div style={{width: '60%', display: 'inline-block'}}>
        <div style={{width: percentage+'%', backgroundColor: 'orange', height: 10}}></div>
      </div>
      <div style={{display: 'inline-block', width: '15%', marginLeft: 10}}>{population}</div>
    </div>
  )
}

const Countries = (props) => {
  let countries = props.data
  let max = props.maxPopulation
  const country = countries.map((country) => <Country key={country} country={country} max={max} />)

  return (
    <div>
      {country}
    </div>
  )
}

const Header = (props) => {

  const {title, subtitle, anotherText} = props.data

  return (
    <header style={headerStyles}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <small>{anotherText}</small>
    </header>
  )
}

const App = () => {

  const maxPopulation = tenHighestPopulation[0]['population']

  const greetings = {
    title: '30 Days Of React',
    subtitle: 'World population',
    anotherText: 'Ten most populated countries',
  }

  return (
    <div>
      <Header data={greetings} />
      <Countries data={tenHighestPopulation} maxPopulation={maxPopulation} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
