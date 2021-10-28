import React from 'react';
import ReactDOM from 'react-dom';
import react from './img/react.png';

const author = {
  name: 'Ángela',
  firstSurname: 'Moreno',
  secondSurname: 'Prado',
}

const career = 'Jr Developer, Spain'

const imgStyles = {
  width: '20%',
}

const listStyles = {
  listStyle: 'none',
}

const liStyles = {
  background: 'skyblue',
  display: 'inline',
  marginRight: 20,
  borderRadius: 15,
  padding: 10,
  color: 'white',
}

const skills = ['HTML', 'CSS', 'JS', 'GIT', 'PYTHON', 'DJANGO', 'PLOTLY DASH']
const formattedSkills = skills.map((skills) => <li style={liStyles}>{skills}</li>)


const app = (
  <main>
    <img src={react} style={imgStyles} alt='React img'/>
    <h1>{author.name} {author.firstSurname} {author.secondSurname}</h1>
    <small>{career}</small>
    <h2>SKILLS</h2>
    <ul style={listStyles}>
      {formattedSkills}
    </ul>
  </main>
)


ReactDOM.render(app, document.getElementById('root'));

