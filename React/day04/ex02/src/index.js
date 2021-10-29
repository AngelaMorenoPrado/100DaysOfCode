import React from 'react';
import ReactDOM from 'react-dom';

const forms = {
  firstInput: 'First name',
  secondInput: 'Last name',
  email: 'Email',
}

const Title = () => <h1>SUBSCRIBE</h1>
const Subtitle = () => <h2>Sign up with your email address to receive news and updates.</h2>
const Button = () => <button style={buttonStyles}>Subscribe</button>

const Form = () => (
  <form>
    <input style={inputStyles} placeholder={forms.firstInput} />
    <input style={inputStyles} placeholder={forms.secondInput} />
    <input style={inputStyles} placeholder={forms.email} />
  </form>
)

const appStyles = {
  backgroundColor: 'skyblue',
  width: '100%',
  textAlign: 'center',
  margin: '0 auto',
}

const buttonStyles = {
  backgroundColor: '#E45333',
  marginTop: 20,
  padding: 10,
  color: 'white',
}

const inputStyles = {
  marginRight: 10,
  borderRadius: 5,
  textAlign: 'center',
}

const App = () => (
  <div style={appStyles}>
    <Title />
    <Subtitle />
    <Form />
    <Button />
  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
