import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {

  let status = props.status ? 'Old enough to drive' : 'Too young to drive'
  
  let skills = props.skills
  let skillsFormatted = skills.map((skills) => <li>{skills}</li>)
  
  return (
    <header>
      <div>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>{props.firstName} {props.firstSurname} {props.secondSurname}</p>
        <small>{props.date}</small>
        <p>I am {props.age} years old</p>
        <p>{status}</p>
        <p>My skills are:</p>
        <ul>
          {skillsFormatted}
        </ul>

        <p>More data:</p>
        <p>My full name is: {props.data.name} {props.data.surnames}</p>
        <p>And I am {props.data.age} years.</p>
      </div>
    </header>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const App = () => {

  const welcome = 'Welcome to 30 Days Of React'
  const title='Getting Started React'
  const subtitle='JavaScript Library'
  const firstName='Ángela'
  const firstSurname='Moreno'
  const secondSurname='Prado'
  const date='Oct 30, 2021'
  const age = 26
  let status = age >= 18
  const skills = ['HTML', 'CSS', 'JS']

  const author = {
    name: 'Ángela',
    surnames: 'Moreno Prado',
    age: 26
  }

  const sayHi = () => {
    alert('Hi')
  }

  return (
    <div>
      <Header
      welcome={welcome}
      title={title}
      subtitle={subtitle}
      firstName={firstName}
      firstSurname={firstSurname}
      secondSurname={secondSurname}
      date={date}
      age={age}
      status={status}
      skills={skills}
      data={author} />
      <Button onClick={sayHi} text='Click!' />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
