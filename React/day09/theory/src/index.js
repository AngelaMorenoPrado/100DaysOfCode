import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    const {
      welcome,
      title,
      subtitle,
      author: {name, surnames},
      date,
    } = this.props.data

    return (
      <div>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{surnames}, {name}</p>
        <small>{date}</small>
      </div>
    )
  }
}

class Button extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {

    const onClick = this.props.action
    const text = this.props.text

    return (
      <button onClick={onClick}>{text}</button>
    )
  }
}

const Login = () => {
  return (
    <div>
      <h1>Please login</h1>
    </div>
  )
}

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome to 30 Days Of React</h1>
    </div>
  )
}

class App extends React.Component 
{

  state = {
    loggedIn: false,
    text: 'Log in',
    techs: ['HTML', 'CSS', 'JavaScript'],
    message: 'Click "greetings" or "show time" to change this message',
  }

  loggedIn = () => {
    const value = this.state.loggedIn ? 'Log in' : 'Log out'
    this.setState({ loggedIn: !this.state.loggedIn, text: value, })
  }

  greetings = () => {
    this.setState({ message: 'Welcome to 30 Days Of React Challenge '})
  }

  handleTime = () => {
    let message = this.showDate(new Date())
    this.setState({ message: message })
  }

  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0,3)
    const year = time.getFullYear()
    const date = time.getDate()

    return `${date}/${month}/${year}`
  }

  render()
  {

    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        name: 'Ángela',
        surnames: 'Moreno Prado'
      },
      date: 'Nov 4, 2021',
    }

    let status = this.state.loggedIn ? <Welcome /> : <Login />

    return (
      <div>
        <Header data={data}/>

        <Main 
          techs={this.state.techs}
          handleTime={this.handleTime}
          greetPeople={this.greetings}
          handleLogin={this.loggedIn}
          text={this.state.text}
          message={this.state.message} />
        {this.state.techs.length === 3 && (
          <p>You have all the prerequisites courses to get started.</p>
        )}
        {!this.state.loggedIn && (
          <p>Please login</p>
        )}
      </div>
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
    const techs = this.props.techs
    const tech = techs.map((t) => <li key={t}>{t}</li>)
    const handleLogin = this.props.handleLogin
    const text = this.props.text
    const greetings = this.props.greetPeople
    const time = this.props.handleTime
    const messages = this.props.message

    return (
      <div>
        <ul>{tech}</ul>
        <button onClick={handleLogin}>{text}</button>
        <button onClick={greetings}>Say Hi!</button>
        <button onClick={time}>Change Time!</button>
        <p>{messages}</p>
      </div>
    )

  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
