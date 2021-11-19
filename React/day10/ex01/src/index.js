import React from 'react';
import ReactDOM from 'react-dom';
import './css/css.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

class App extends React.Component 
{
  state = {
    color: 'black',
    url: 'https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/light-mode.png',
    letterColor: 'white',
  }

  changeBackground = () => {

    const colour = this.state.color === 'black' ? 'white' : 'black'
    const url = this.state.color === 'black' ? 'https://static.thenounproject.com/png/2631023-200.png' : 'https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/light-mode.png'
    const letterColor = this.state.color === 'black' ? 'black' : 'white'

    this.setState({
      color: colour,
      url: url,
      letterColor: letterColor,
    })
  }

  render()
  {

    document.body.style.backgroundColor = this.state.color

    const data = {
      title: 'Welcome',
      subtitle: '30 Days Of React',
      reason: 'My portfolio',
      date: 'Nov 19, 2021',
    }

    const dataFooter = {
      firstName: 'Ángela',
      surnames: 'Moreno Prado',
    }

    return (
      <div>
        <Header button={this.changeBackground} img={this.state.url} />
        <Main data={data} letterColor={this.state.letterColor} />
        <Footer data={dataFooter} letterColor={this.state.letterColor} />
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
