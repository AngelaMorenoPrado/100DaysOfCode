import React from 'react';
import ReactDOM from 'react-dom';

const HexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  let colours = []
  for(let u=0; u<5; u++)
  {
    for (let i=0; i<6; i++)
    {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }

    colours.push(<div style={{backgroundColor: '#'+color, width: '100%', textAlign: 'center'}}>{color}</div>)
    color = ''
  }

  console.log(colours)
  return colours
}


const App = () => (
  <HexaColor />
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
