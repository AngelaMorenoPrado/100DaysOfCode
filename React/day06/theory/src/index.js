import React from 'react';
import ReactDOM from 'react-dom';

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]

const Skill = (props) => {
  const [tech, level] = props.skill
  return (
    <li key={tech}>{tech}, {level}</li>
  )
}

const Skills = (props) => {
  const skills = props.skills
  const skillsFormatted = skills.map((skills) => <Skill key={skills} skill={skills} />)

  return (
    <ul>{skillsFormatted}</ul>
  )
}

{/* ----- */}

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

const Country = (props) => {
  const {name, city} = props.country

  return (
    <li key={name}>{name}, {city}</li>
  )
}

const Countries = (props) => {
  const countries = props.countries
  const countriesFormatted = countries.map((countries) => <Country key={countries.name} country={countries}/>)

  return (
    <ul>
      {countriesFormatted}
    </ul>
  )
}

const App = () => {
  return (
    <div>
      <Skills skills={skills} />
      <Countries countries={countries} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
