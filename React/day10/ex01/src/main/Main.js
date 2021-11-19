import React from 'react';
import '../css/css.css';

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
            reason,
            date
        } = this.props.data

        const letterColour = this.props.letterColor

        return (
            <main className='main_portfolio'>
                <h1 style={{color: letterColour}}>{title}</h1>
                <h2 style={{color: letterColour}}>{subtitle}</h2>
                <h3 style={{color: letterColour}}>{reason}</h3>
                <small style={{color: letterColour}}>Today is: {date}</small>
            </main>
        )
    }
}

export default Main