import React from 'react';
import ReactDOM from 'react-dom';

const title = 'SUBSCRIBE';
const text = <p>Sign up with your email address to receive news and updates.</p>
const firstName = 'First name'
const lastName = 'Last name'
const email = 'Email'

const mainStyles = {
  textAlign: 'center',
  backgroundColor: 'skyblue',
}

const inputStyles = {
  marginRight: 10,
}

const buttonStyles = {
  marginTop: 30,
  backgroundColor: '#E45333',
  color: 'white',
}

const main = (
  <main style={mainStyles}>
    <div>
      <h1>{title}</h1>
      {text}
      <form>
        <input style={inputStyles} placeholder={firstName}/>
        <input style={inputStyles} placeholder={lastName}/>
        <input style={inputStyles} placeholder={email}/>
      </form>
      <button style={buttonStyles}>{title}</button>
    </div>
  </main>
)

const root = document.getElementById('root');

ReactDOM.render(main,root);
