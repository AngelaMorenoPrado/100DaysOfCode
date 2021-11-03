import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';


class Num extends React.Component {
  constructor(props)
  {
    super(props)
  }

  render(){

    const num = this.props.data

    const oddsStyle = {
      backgroundColor: 'green',
      textAlign: 'center',
      display: 'inline-block',
      width: '100%',
    }

    const evenStyle = {
      backgroundColor: 'yellow',
      textAlign: 'center',
      display: 'inline-block',
      width: '100%',
    }

    const primeStyle = {
      backgroundColor: 'red',
      textAlign: 'center',
      display: 'inline-block',
      width: '100%',
    }

    if(num == 0 || num % 2 == 0)
    {
      return <div style={oddsStyle}>{num}</div>
    }
    else if(num == 1)
    {
      return <div style={evenStyle}>{num}</div>
    }
    else
    {
      for(let i=3; i<num; i++)
      {
        if(num % i == 0)
        {
          return <div style={evenStyle}>{num}</div>
        }
      }

      return <div style={primeStyle}>{num}</div>
    }
  }
}

class Numbers extends React.Component {
  constructor(props)
  {
    super(props)
  }

  render()
  {

    const main = {
      display: 'inline-block',
      width: '20%',
    }

    const widthTotal = {
      width: '100%',
    }

    const numbers = this.props.data
    const numberFormatted = numbers.map((number) => <div style={main} key={number}><Num data={number} /></div>)
    return(
      <div style={widthTotal}>
        {numberFormatted}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props)
  {
    super(props)
  }

  render() {

    let numbers = []

    for(let i=0; i<=31; i++)
    {
      numbers.push(i)
    }

    return (
      <div>
        <Numbers data={numbers} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
