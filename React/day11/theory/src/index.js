import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{

  state = {
    firstName: '',
    message: '',
    key: '',
  }

  handleClick = (e) => {
    this.setState({
      message: 'Welcome to the world of events',
    })
  }

  handleMouse = (e) => {
    this.setState({
      message: 'Mouse is moving',
    })
  }

  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    })
  }

  handleKeyPress = (e) => {
    const val = e.target.value

    this.setState({
      message: val +` has been pressed and the keycode is ` + e.charCode,
    })
  }

  handleBlur = (e) => {
    this.setState({
      message: 'Input field has been blurred',
    })
  }

  handleCopy = (e) => {
    this.setState({
      message: 'Text copied',
    })
  }

  render()
  {

    return (
      <div>
        <h1>Welcome to the World of Events</h1>
        <button onClick={this.handleClick}>Click me!</button>
        <p onCopy={this.handleCopy}>
          Check copy right permission by copying this text
        </p>
        <p>{this.state.message}</p>
        <label>Test for handleKeypPress</label>
        <input type='text' onKeyPress={this.handleKeyPress}></input>
        <br />

        <label>Test for onBlur event:</label>
        <input type='text' onBlur={this.handleBlur}></input>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name: </label>
            <input
              onChange={this.handleChange}
              name='firstName'
              value={this.state.value}
            />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
