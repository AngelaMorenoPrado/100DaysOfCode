import React from 'react';
import ReactDOM from 'react-dom';


class Colour extends React.Component {
  constructor(props)
  {
    super(props)
  }

  render()
  {

    const colour = this.props.data

    return (
      <div style={{backgroundColor: colour, width: '100%', display: 'inline-block', color: 'white', textAlign: 'center'}}>{colour}</div>
    )
  }
}


class Main extends React.Component {
  constructor(props)
  {
    super(props)
  }

  render()
  {

    const colours = this.props.data
    const colourFormatted = colours.map((colour) => <div style={{width: '20%', display: 'inline-block'}} key={colour}><Colour data={colour}/></div>)
    
    return (
      <div>
        {colourFormatted}
      </div>
    )
  }
}

class Header extends React.Component {
  constructor(props)
  {
    super(props)
  }

  render()
  {
    const {
      title,
      subtitle
    } = this.props.data
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props)
  {
    super(props)
  }

  render()
  {

    const data = {
      title: '30 Days Of React',
      subtitle: 'Hexadecimal Colours',
    }

    const colours = []
    let colour = ''
    let poss = '0123456789abcdef'

    for(let i=0; i<30; i++)
    {
      for(let u=0; u<6; u++)
      {
        let index = Math.floor(Math.random() * poss.length)
        colour += poss[index] 
      }

      colours.push('#'+colour)
      colour = ''
    }

    return (
      <div style={{textAlign: 'center'}}>
        <Header data={data} />
        <Main data={colours} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);