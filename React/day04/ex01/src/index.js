import React from 'react';
import ReactDOM from 'react-dom';
import css from './img/css.png';
import html from './img/html.png';
import js from './img/js.png';
import react from './img/react.png';

const imgStyles = {
  width: '20%',
  display: 'inline-block',
}

const appStyles = {
  width: '100%',
  textAlign: 'center',
  margin: '0 auto',
}

const Title = () => <h1>Front End Technologies</h1>

const Imagenes = () => (
  <div style={appStyles}>
    <img style={imgStyles} src={html} alt="HTML alt img" />
    <img style={imgStyles} src={css} alt="CSS alt img" />
    <img style={imgStyles} src={js} alt="JS alt img" />
    <img style={imgStyles} src={react} alt="React alt img" />
  </div>
)
const App = () => (
  <div style={appStyles}>
    <Title />
    <Imagenes />
  </div>
)

const root = document.getElementById('root');

ReactDOM.render(
  <App />,
  root
);
