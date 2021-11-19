import React from 'react';
import '../css/css.css';

class Footer extends React.Component 
{
    constructor(props)
    {
        super(props)
    }

    render()
    {

        const {
            firstName,
            surnames,
        } = this.props.data
        
        const letterColour = this.props.letterColor

        return (
            <footer className='footer_portfolio'>
                <p style={{color: letterColour}}>{surnames}, {firstName}</p>
            </footer>
        )
    }
}

export default Footer