import React from 'react';
import ReactDOM from 'react-dom';


const Colour = (prop) => {
  let colour = prop.colour

  return <div style={{backgroundColor: colour, display: 'inline-block', width: '10%', padding: 5, color: 'white', textAlign: 'center'}}>{colour}</div>
}

const Colours = (props) => {
  let colours = props.colours
  const coloursFormatted = colours.map((colours) => <Colour key={colours} colour={colours} />)

  return <div>{coloursFormatted}</div>
}

const App = () => {
  let str = '0123456789abcdef'
  let colour = ''
  let colours = []

  for(let i=0; i<30; i++)
  {
    for(let u=0; u<6; u++)
    {
      let index = Math.floor(Math.random() * str.length)
      colour += str[index]
    }

    colours.push('#'+colour)
    colour = ''
  }

  return (
    <div>
      <Colours colours={colours} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
