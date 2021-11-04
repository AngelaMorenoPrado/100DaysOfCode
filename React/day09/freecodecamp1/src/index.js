import React from 'react';
import ReactDOM from 'react-dom';

export const quotes = [
  {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela'},
  {quote: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney'},
  {quote: 'If life were predictable it would cease to be life, and be without flavor.', author: 'Eleanor Roosevelt'},
  {quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', author: 'Mother Teresa'},
  {quote: 'When you reach the end of your rope, tie a knot in it and hang on.', author: 'Franklin D. Roosevelt'},
  {quote: 'Always remember that you are absolutely unique. Just like everyone else.', author: 'Margaret Mead'},
  {quote: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt'},
  {quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.', author: 'Benjamin Franklin'},
  {quote: 'It is during our darkest moments that we must focus to see the light.', author: 'Aristotle'},
  {quote: 'Whoever is happy will make others happy too.', author: 'Anne Frank'},
  {quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.', author: 'Ralph Waldo Emerson'},
  {quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', author: 'Mother Teresa'},
]

export const colours = [
  "#c72923",
  "#116063",
  "#57aefc",
  "#ed674d",
  "#9c5b93",
  "#4dd3ed",
  "#55515e",
]

class App extends React.Component
{

  state = {
    index: Math.floor(Math.random() * quotes.length),
    indexColour: Math.floor(Math.random() * colours.length),
  }

  changeQuote = () => {
    this.setState({ index: Math.floor(Math.random() * quotes.length), indexColour:  Math.floor(Math.random() * colours.length) })
  }

  render()
  {

    const data = {
      title: 'Ex 01 freecodecamp',
      subtitle: 'React',
      buttonText: 'Next quote!',
    }

    return (
      <div>
        <Main
          data={data}
          quote={quotes[this.state.index]['quote']}
          author={quotes[this.state.index]['author']}
          state={this.changeQuote}
          indexColour={colours[this.state.indexColour]} />
      </div>
    )

  }
}

class Main extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {

    const quote = this.props.quote
    const author = this.props.author
    const changeQuote = this.props.state
    const colour = this.props.indexColour

    const {
      title,
      subtitle,
      buttonText,
    } = this.props.data

    document.body.style.backgroundColor = colour

    return(
      <div style={{textAlign: 'center'}}>
        <div style={{marginBottom: '5%'}}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div id="quote-box" style={{width: '50%', margin: '0 auto', padding: 5, border: '1px black solid', borderRadius: 10, backgroundColor: 'white'}}>
          <h3 id="text">{quote}</h3>
          <p id="author">{author}</p>
          <button id="new-quote" onClick={changeQuote}>{buttonText}</button>
          <br />
          <div style={{padding: 10}}>
            <a class="button" id="tweet-quote" title="Tweet this quote" target="_blank" href={"https://twitter.com/intent/tweet?text="+quote+"-"+author}><i className="fa fa-twitter-square fa-lg"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
