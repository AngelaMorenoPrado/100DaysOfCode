import React from 'react';
import ReactDOM from 'react-dom';

const imgStyles = {
  width: '20%',
}

const listStyles = {
  listStyle: 'none',
}

const liStyles = {
  display: 'inline-block',
  backgroundColor: 'skyblue',
  width: '10%',
  borderRadius: 5,
  padding: 5,
  marginRight: 10,
  color: 'white',
  textAlign: 'center',
}

const Header = (props) => {

  const {picture, name, surnames, job, country} = props.data

  return (
    <header>
      <img style={imgStyles} src={require(`${picture}`).default} alt='React pic' />
      <h1>{name} {surnames}</h1>
      <small>{job}, {country}</small>
    </header>
  )
}

const Skills = (props) => {

  let {title, values} = props.skills

  const valuesFormatted = values.map((values) => <li style={liStyles}>{values}</li>)

  return (
    <main>
      <h1>{title}</h1>
      <ul style={listStyles}>
        {valuesFormatted}
      </ul>
    </main>
  )
}

const Footer = (props) => {

  return (
    <footer>
      <small>{props.data}</small>
    </footer>
  )
}

const App = () => {

  const data = {
    picture: './img/react.png',
    name: 'Ángela',
    surnames: 'Moreno Prado',
    job: 'Jr Developer',
    country: 'Spain'
  }

  const skills = {
    title: 'SKILLS',
    values: ['HTML', 'CSS', 'JS', 'DJANGO', 'PYTHON', 'JAVA']
  }

  const date = 'Oct 30, 2021'

  return (
    <div>
      <Header data={data}/>
      <Skills skills={skills}/>
      <Footer data={date}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
