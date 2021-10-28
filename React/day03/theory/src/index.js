import React from 'react';
import ReactDOM from 'react-dom';
import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.development';
import reactImage from './img/react.jpeg';

const jsxElement = <h1>This is a JSX element</h1>
const title = <h2>Getting Started React</h2>
const rootElement = document.getElementById('root')

const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 26,
  lineHeight: 1.5,
}

const welcome = 'Welcome to 30 Days Of React'
const secondTitle = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  name: 'Ángela',
  firstSurname: 'Moreno',
  secondSurname: 'Prado',
}


const header = (
  <header style={headerStyles}>
    <h1>{welcome}</h1>
    <h2>{secondTitle}</h2>
    <h3>{subtitle}</h3>
    <p>{author.name} {author.firstSurname} {author.secondSurname}</p>
    <small>28 Oct, 2021</small>
  </header>
)

const mainStyles = {
  backgroundColor: '#F3F0F5',
}

const firstNumber = 1
const secondNumber = 3

const result = (
  <p>
    {firstNumber} + {secondNumber} = {firstNumber + secondNumber}
  </p>
)

const tech = ['HTML', 'CSS', 'JavaScript']
const techFormatted = tech.map((tech) => <li>{tech}</li>)

const main = (
  <main style={mainStyles}>
    <p>Prerequisite to get started react.js</p>
    <ul>
      {techFormatted}
    </ul>
    <img src={reactImage} alt='Img react'/>
    {result}
  </main>
)

const footerStyles = {
  backgroundColor: '#61DBFB'
}

const footer = (
  <footer style={footerStyles}>
    <p>Copyright 2021</p>
  </footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)

ReactDOM.render(app, rootElement)
