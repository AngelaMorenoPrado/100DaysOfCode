import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor runs before any other code
  }
  render() {

    console.log(this.props.data)

    const {
      title,
      subtitle,
      third,
      author: {name, surnames},
      date,
    } = this.props.data

    return (
      <header>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <h3>{third}</h3>
          <p>{surnames}, {name}</p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

class TechList extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((techs) => <li key={techs}>{techs}</li>)

    return techsFormatted
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Prerequisites to get started with react.js:</p>
        <ul>
          <TechList />
        </ul>
      </div>
    )
  }
}

class Footer extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <footer>
        <p>Ángela Moreno Prado</p>
      </footer>
    )
  }
}

class Button extends React.Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
      <button onClick={this.props.action}>click here!</button>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2021')
  }
  render(){

    const data = {
      title: 'Welcome to 30 Days of React',
      subtitle: 'Getting Started React',
      third: 'JavaScript Library',
      author: {
        name: 'Ángela',
        surnames: 'Moreno Prado'
      },
      date: 'Nov 3, 2021'
    }

    return (
      <div>
        <Header data={data} />
        <Main />
        <Footer />
        <Button action={this.greetPeople} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
