import React from 'react';
import ReactDOM from 'react-dom';


const Main = (props) => {

  let colours = props.colours
  let coloursFormatted = colours.map((colours) => <div style={{backgroundColor: '#'+colours, width: '100%', textAlign: 'center'}}>{colours}</div>)

  return (
    <div>
      {coloursFormatted}
    </div>
  )
}

const App = () => {
  let str = '0123456789abcdef'
  let color = ''
  let colours = []

  for(let i=0; i<5; i++)
  {
    for(let u=0; u<6; u++)
    {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }

    colours.push(color)
    color = ''
  }

  return (
    <Main colours={colours} />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);