import React from 'react';
import ReactDOM from 'react-dom';

const imgsStyles = {
  width: '20%',
  display: 'inline-block',
}

const centerStyles = {
  width: '100%',
  textAlign: 'center',
  margin: '0 auto',
}

const Header = (props) => {
  return (
    <header>
      <h1>{props.text}</h1>
    </header>
  )
}

const Main = (props) => {

  let imgs = props.data
  let imgsFormatted = imgs.map((imgs) => <img style={imgsStyles} src={require(`./img/${imgs}.png`).default} alt='Img' />)
  
  return (
    <main>
      {imgsFormatted}
    </main>
  )
}

const App = () => {

  let imgs = ['html', 'css', 'js', 'react']

  return (
    <div style={centerStyles}>
      <Header text='Front End Technologies' />
      <Main data={imgs}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
