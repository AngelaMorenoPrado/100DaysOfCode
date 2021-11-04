import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date()
let month = date.getMonth()

export const months = [
  {season: 'Winter', background: 'skyblue', color:'black'},
  {season: 'Winter', background: 'skyblue', color:'black'},
  {season: 'Spring', background: 'green', color:'black'},
  {season: 'Spring', background: 'green', color:'black'},
  {season: 'Spring', background: 'green', color:'black'},
  {season: 'Summer', background: 'yellow', color:'black'},
  {season: 'Summer', background: 'yellow', color:'black'},
  {season: 'Summer', background: 'yellow', color:'black'},
  {season: 'Autumn', background: 'brown', color:'white'},
  {season: 'Autumn', background: 'brown', color:'white'},
  {season: 'Autumn', background: 'brown', color:'white'},
  {season: 'Winter', background: 'skyblue', color:'black'},
]


class Main extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    const {
      title,
      subtitle,
      explanation,
      using,
    } = this.props.data

    const season = this.props.season
    const background = this.props.background
    const color = this.props.color

    return(
      <div style={{backgroundColor: background, color: color}}>
        <div style={{marginLeft: '10%', padding: 10}}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <h3>{explanation}</h3>
          <small>{using}</small>
          <p>Season: {season}</p>
        </div>
      </div>
    )
  }
}

class App extends React.Component
{

  state = {
    month: `${months[month]['season']}`,
    background: `${months[month]['background']}`,
    color: `${months[month]['color']}`,
  }

  render()
  {

    const data = {
      title: '30 Days Of React',
      subtitle: 'Day 09, ex 01',
      explanation: 'Changes the body of the background based on the season of the year',
      using: 'states',
    }

    return(
      <div>
        <Main
          season={this.state.month}
          background={this.state.background}
          color={this.state.color}
          data={data} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
