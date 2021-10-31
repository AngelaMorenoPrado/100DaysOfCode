import React from 'react';
import ReactDOM from 'react-dom';

const numberStyles = {
  textAlign: 'center',
  display: 'inline-block',
  width: '10%',
  padding: 5,
  margin: 1,
  color: 'white',
}

const evens = {
  textAlign: 'center',
  display: 'inline-block',
  width: '10%',
  padding: 5,
  backgroundColor: 'green',
  margin: 1,
  color: 'white',
}

const odds = {
  textAlign: 'center',
  display: 'inline-block',
  width: '10%',
  padding: 5,
  backgroundColor: '#D1D11A',
  margin: 1,
  color: 'white',
}

const prime = {
  textAlign: 'center',
  display: 'inline-block',
  width: '10%',
  padding: 5,
  backgroundColor: 'red',
  margin: 1,
  color: 'white',
}

const generalDiv = {
  width: '100%',
}

const Number = (props) => {
  const number = props.number

  if(number == 0 || number % 2 == 0)
  {
    return <div style={evens}>{number}</div>
  }
  else if(number == 1)
  {
    return <div style={odds}>{number}</div>
  }
  else
  {
    for(let i=2; i<number; i++)
    {
      if(number % i == 0 )
      {
        console.log(number)
        console.log(i)
        return <div style={odds}>{number}</div>
      }
    }

    return <div style={prime}>{number}</div>
  }
}

const Numbers = (props) => {
  let numbers = props.numbers
  const numbersFormatted = numbers.map((numbers) => <Number key={numbers} number={numbers} />)

  return <div>{numbersFormatted}</div>
}

const App = () => {
  let numbers = []
  for(let i=0; i<=31; i++)
  {
    numbers.push(i)
  }

  return (
    <div style={generalDiv}>
      <Numbers numbers={numbers} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
