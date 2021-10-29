import React from 'react';
import ReactDOM from 'react-dom';
import react from './img/react.png';

const author = {
  name: 'Ángela',
  firstSurname: 'Moreno',
  secondSurname: 'Prado',
  job: 'Jr Developer',
  country: 'Spain'
}

const liStyles = {
  display: 'inline-block',
  width: '10%',
  backgroundColor: 'skyblue',
  padding: 10,
  marginRight: 10,
  borderRadius: 10,
  textAlign: 'center',
  color: 'white',
}

const skills = ['HTML', 'CSS', 'JS', 'Git', 'Git', 'Django', 'Plotly Dash']
const skillsFormatted = skills.map((skills) => <li style={liStyles}>{skills}</li>)

const date = 'Oct 29, 2021'

const imgStyles = {
  width: '20%',
}

const PersonalData = () => {
  return (
    <div>
      <img style={imgStyles} src={react} alt='React img' />
      <h1>{author.name} {author.firstSurname} {author.secondSurname}</h1>
      <small>{author.job}, {author.country}</small>
    </div>
  )
}

const listStyles = {
  listStyle: 'none',
}

const Skills = () => {
  return (
    <div>
      <h2>SKILLS</h2>
      <ul style={listStyles}>
        {skillsFormatted}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      {date}
    </footer>
  )
}

const App = () => {
  return (
    <div>
      <PersonalData />
      <Skills />
      <Footer />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);