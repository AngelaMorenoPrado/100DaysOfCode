import React from 'react';
import ReactDOM from 'react-dom';
import Student from './formStudent/FormStudent';
import StudentFull from './formStudentFull/FormStudentFull'

class App extends React.Component
{
  state = {
    firstName: '',
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({
      firstName: value,
    })
  }

  render()
  {

    return (
      <div>
        <div>
          <label>First name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='First name'
            value={this.state.firstName}
            onChange={this.handleChange}></input>
            <h1>{this.state.firstName}</h1>
        </div>
        <Student />
        <StudentFull />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
