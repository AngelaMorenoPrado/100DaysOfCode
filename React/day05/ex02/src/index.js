import React from 'react';
import ReactDOM from 'react-dom';

const centerStyles = {
  width: '100%',
  textAlign: 'center',
  margin: '0 auto',
  backgroundColor: 'skyblue',
}

const inputStyles = {
  marginRight: 10,
  borderRadius: 10,
  textAlign: 'center',
}

const buttonStyles = {
  backgroundColor: '#E45333',
  padding: 5,
  marginTop: 10,
}

const Header = (props) => {

  const {title, subtitle} = props.data

  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  )
}

const Form = (props) => {

  const {firstInput, secondInput, thirdInput} = props.data

  return (
    <form>
      <input style={inputStyles} placeholder={firstInput}></input>
      <input style={inputStyles} placeholder={secondInput}></input>
      <input style={inputStyles} placeholder={thirdInput}></input>
    </form>
  )
}


const Button = (props) => <button style={buttonStyles}>{props.data}</button>

const App = () => {

  const headerText = {
    title: 'SUSCRIBE',
    subtitle: 'Sign up with your email address to receive news and updates.'
  }

  const formText = {
    firstInput: 'First name',
    secondInput: 'Last name',
    thirdInput: 'Email',
  }

  const text = 'Subscribe'

  return (
    <div style={centerStyles}>
      <Header data={headerText} />
      <Form data={formText} />
      <Button data={text} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);