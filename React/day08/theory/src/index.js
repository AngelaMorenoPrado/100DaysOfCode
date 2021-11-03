import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

  state = {
    count: 0,
    image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
  }

  addOne = () => {
    this.setState({ count: this.state.count + 1})
  }

  minusOne = () => {
    this.setState({ count: this.state.count - 1})
  }

  changeAnimal = () => {
    let cat = 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
    let dog = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'

    let value = this.state.image === cat ? dog : cat

    this.setState({image: value})
  }

  render(){
    const count = this.state.count
    
    return(
      <div>
        <p>{count}</p>
        <button onClick={this.addOne}>Increment</button>
        <button onClick={this.minusOne}>Decrement</button>
        <br />
        <img src={this.state.image} />
        <button onClick={this.changeAnimal}>Change animal</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

