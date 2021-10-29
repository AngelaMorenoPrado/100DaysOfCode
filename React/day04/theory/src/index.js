import React from 'react';
import ReactDOM from 'react-dom';
import react from './img/react.png';


const author = {
  name: 'Ángela',
  firstSurname: 'Moreno',
  secondSurname: 'Prado',
}

const date = 'Oct 29, 2021'

const data = {
  welcome: 'Welcome to 30 Days Of React',
  subtitle: 'Getting Started React',
  secondSubtitle: 'JavaScript Library'
}

const Header = () => (
  <header>
    <div>
      <h1>{data.welcome}</h1>
      <h2>{data.subtitle}</h2>
      <h3>{data.secondSubtitle}</h3>
      <p>{author.name} {author.firstSurname} {author.secondSurname}</p>
      <small>{date}</small>
    </div>
  </header>
)

const TechList = () => {
  const tech = ['HTML', 'CSS', 'JAVASCRIPT']
  const techFormatted = tech.map((tech) => <li>{tech}</li>)
  return techFormatted
}

const imgStyles = {
  width: '20%',
}

const User = () => (
  <div>
    <img style={imgStyles} src={react} alt="React img" />
    <h2>Ángela Moreno Prado</h2>
  </div>
)

const Footer = () => (
  <footer>
    <p>Copyright Ángela Moreno Prado, 2021</p>
  </footer>
)

const App = () => (
  <div>
    <Header />
    <User />
    <Footer />
  </div>
)

const root = document.getElementById('root');

ReactDOM.render(
  <App />,
  root
);
