import React from 'react';
import ReactDOM from 'react-dom';

export const countriesData = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Afghanistan_%282004%E2%80%932013%29.svg',
    currency: 'Afghan afghani',
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    languages: ['Swedish'],
    population: 28875,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/2560px-Flag_of_%C3%85land.svg.png',
    currency: 'Euro',
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    languages: ['Albanian'],
    population: 2886026,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1200px-Flag_of_Albania.svg.png',
    currency: 'Albanian lek',
  },
  {
    name: 'Algeria',
    capital: 'Algiers',
    languages: ['Arabic'],
    population: 40400000,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/2560px-Flag_of_Algeria.svg.png',
    currency: 'Algerian dinar',
  },
  {
    name: 'American Samoa',
    capital: 'Pago Pago',
    languages: ['English', 'Samoan'],
    population: 57100,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_American_Samoa.svg/1280px-Flag_of_American_Samoa.svg.png',
    currency: 'United State Dollar',
  },
  {
    name: 'Andorra',
    capital: 'Andorra la Vella',
    languages: ['Catalan'],
    population: 78014,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/1280px-Flag_of_Andorra.svg.png',
    currency: 'Euro',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    languages: ['Portuguese'],
    population: 25868000,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1280px-Flag_of_Angola.svg.png',
    currency: 'Angolan kwanza',
  },
]

class Main extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  render() {
    const changeCountry = this.props.button

    const {
      name,
      capital,
      languages,
      population,
      flag,
      currency
    } = this.props.country

    return (
      <div style={{marginTop: 20}}>
        <div style={{textAlign: 'center'}}>
          <div>
            <img src={flag} style={{width: '20%'}} />
            <div><p><b>{name}</b></p></div>
            <p><b>Capital:</b> {capital}</p>
            <p><b>Language:</b> {languages}</p>
            <p><b>Population:</b> {population}</p>
            <p><b>Currency:</b> {currency}</p>
          </div>
          <button onClick={changeCountry}>Select Country</button>
        </div>
      </div>
    )
  }
}

class Footer extends React.Component
{
  render(){
    return(
      <footer style={{textAlign: 'center', backgroundColor: 'skyblue'}}>
        <p>Ángela Moreno Prado, 2021</p>
      </footer>
    )
  }
}

class Header extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {

    const {
      title,
      subtitle,
      third,
      author: {name, surnames},
      date,
      sentence
    } = this.props.data

    return (
      <div style={{backgroundColor: 'skyblue'}}>
        <div style={{marginLeft: '10%', padding: 5}}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <h3>{third}</h3>
          <p>{surnames}, {name}</p>
          <small>{date}</small>
          <p>{sentence}</p>
        </div>
      </div>
    )
  }
}

class App extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  state = {
    index: Math.floor(Math.random() * countriesData.length)
  }

  changeCountry = () => {
    this.setState({ index: Math.floor(Math.random() * countriesData.length) })
  }

  render()
  {
    const data = {
      title: '30 Days Of React',
      subtitle: 'Getting Started React',
      third: 'JavaScript Library',
      author: {
        name: 'Ángela',
        surnames: 'Moreno Prado',
      },
      date: 'Nov 3, 2021',
      sentence: 'Select a country for your next holiday',
    }

    return (
      <div>
        <Header data={data} />
        <Main data={data} country={countriesData[this.state.index]} button={this.changeCountry} />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
