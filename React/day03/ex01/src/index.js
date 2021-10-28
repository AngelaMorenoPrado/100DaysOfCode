import React from 'react';
import ReactDOM from 'react-dom';
import html from './img/html.png';
import css from './img/css.png';
import js from './img/js.png';
import react from './img/react.png';


const center = {
  textAlign: 'center',
}

const secondTitle = <h1 style={center}>Front End Technologies</h1>

const divStyles = {
  display: 'inline-block',
  width: '100%',
  margin: '0 auto',
  textAlign: 'center',
}

const mainStyles = {
  width: '100%',
}

const main = (
  <main style={mainStyles}>
    {secondTitle}
    <div style={divStyles}>
      <img src={html} alt='HTML img' style={{width: '20%'}}/>
      <img src={css} alt='CSS img' style={{width: '20%'}}/>
      <img src={js} alt='JS img' style={{width: '20%'}}/>
      <img src={react} alt='React img' style={{width: '20%'}}/>
    </div>
  </main>
)

const root = document.getElementById('root');


ReactDOM.render(main, root);