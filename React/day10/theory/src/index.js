import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Hola from './App'
import Header from './header/Header'
import Footer from './footer/Footer'

class App extends React.Component
{
  render()
  {
    const data = {
      welcome: 'Welcome',
      title: 'to 30 Days Of React',
      subtitle: 'This is day 10',
      firstName: 'Ángela',
      lastName: 'Moreno Prado',
      date: 'Nov 19, 2021',
    }

    const dataFooter = {
      firstName: 'Ángela',
      lastName: 'Moreno Prado',
    }

    return (
      <div>
        <Header data={data} />
        <Hola />
        <Footer data={dataFooter} />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
