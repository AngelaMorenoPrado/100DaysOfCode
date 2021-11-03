import React from 'react';
import ReactDOM from 'react-dom';
import react from './img/react.png';

const marginLeft = {
  marginLeft: '10%',
}

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
      author: {name, surnames},
      date,
    } = this.props.data

    const background = this.props.background

    const letters = this.props.letters

    return (
      <header style={{backgroundColor: background, color: letters}}>
        <h1 style={marginLeft}>{title}</h1>
        <h2 style={marginLeft}>{subtitle}</h2>
        <h3 style={marginLeft}>{third}</h3>
        <p style={marginLeft}>{surnames}, {name}</p>
        <small style={marginLeft}>{date}</small>
      </header>
    )
  }
}

class Main extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    const background = this.props.background

    const {
      sentence,
      req,
      author: {name, surnames},
    } = this.props.requisites

    const reqFormatted = req.map((req) => <li key={req} style={marginLeft}>{req}</li>)
    
    const changeBackground = this.props.changeBackground

    const letters = this.props.letters

    return (
      <div style={{backgroundColor: background, color: letters}}>
        <p style={marginLeft}>{sentence}</p>
        <ul>
          {reqFormatted}
        </ul>
        <img src={react} style={{width: '20%', marginLeft: '10%'}} />
        <p style={marginLeft}>{surnames}, {name}</p>
        <button style={marginLeft} onClick={changeBackground}>CHANGE BACKGROUND</button>
      </div>
    )
  }
}

class Footer extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    const background = this.props.background

    const letters = this.props.letters

    return (
      <footer style={{backgroundColor: background, color: letters, margin: 0}}>
        <p style={marginLeft}>Ángela Moreno Prado, 2021</p>
      </footer>
    )
  }
}

class App extends React.Component {

  state = {
    background: 'skyblue',
    backgroundMain: 'white',
    letters: 'black',
  }

  changeBackground = () => {
    const colour = this.state.background === 'skyblue' ? 'black' : 'skyblue'
    const mainColour = colour === 'skyblue' ? 'white' : 'black'
    const colorLetters = this.state.letters === 'black' ? 'white' : 'black'
    this.setState({background: colour, backgroundMain: mainColour, letters: colorLetters})
  }

  render(){

    const data = {
      title: 'Welcome to 30 Days Of React',
      subtitle: 'Getting Started React',
      third: 'JavaScript Library',
      author: {
        name: 'Ángela',
        surnames: 'Moreno Prado',
      },
      date: 'Nov 3, 2021',
    }

    const requisites = {
      sentence: 'Prerequisite to get started react.js',
      req: ['HTML', 'CSS', 'JavaScript'],
      author: {
        name: 'Ángela',
        surnames: 'Moreno',
      }
    }

    return(
      <div style={{margin: 0}}>
        <Header data={data} background={this.state.background} letters={this.state.letters} />
        <Main requisites={requisites} background={this.state.backgroundMain} changeBackground={this.changeBackground} letters={this.state.letters} />
        <Footer background={this.state.background} letters={this.state.letters} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
