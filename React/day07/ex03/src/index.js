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

class Header extends React.Component {
  constructor(props)
  {
    super(props)
  }

  render(){

    const {
      title,
      subtitle,
      third,
    } = this.props.data

    return (
      <div style={{marginBottom: 10}}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <small>{third}</small>
      </div>
    )
  }
}

class Country extends React.Component {
  constructor(props)
  {
    super(props)
  }

  render()
  {
    const {
      country,
      population
    } = this.props.data 

    const max = this.props.max

    const percentage = (population * 100) / max
    
    return (
      <div style={{width: '100%'}}>
        <div style={{width: '15%', display: 'inline-block'}}>{country}</div>
        <div style={{width: '70%', display: 'inline-block'}}><div style={{width: percentage+'%', height: 15, backgroundColor: 'orange'}}></div></div>
        <div style={{width: '15%', display: 'inline-block'}}>{population}</div>
      </div>
    )
  }
}

class Main extends React.Component {
  constructor(props)
  {
    super(props)
  }

  render()
  {
    const data = this.props.data
    const max = this.props.max

    const countryFormatted = data.map((country) => <div key={country}><Country data={country} max={max} /></div>)
  
    return (
      <div>
        {countryFormatted}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props)
  {
    super(props)
  }

  render()
  {

    const data = {
      title: '30 Days Of React',
      subtitle: 'World population',
      third: 'Ten most populated countries',
    }

    const max = tenHighestPopulation[0]['population']

    return (
      <div style={{textAlign: 'center'}}>
        <Header data={data} />
        <Main data={tenHighestPopulation} max={max} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);