import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{

  state = {
    top: 50,
    right: 50,
  }

  handleMouse = (e) => {
    const min = 0
    const max = 80

    const randTop = min + Math.random() * (max - min)
    const randRight = min + Math.random() * (max - min)

    this.setState({
      top: randTop,
      right: randRight,
    })
  }

  render()
  {
    return (
      <div style={{width: '100%'}}>
        <div onMouseEnter={this.handleMouse} style={{width: '15%', backgroundColor: 'skyblue', textAlign: 'center', position: 'absolute', top: this.state.top+'%', right: this.state.right+'%'}}>
          <p>30 Days Of React</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
