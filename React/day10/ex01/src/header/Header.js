import React from 'react';
import '../css/css.css';

class Header extends React.Component 
{
    constructor(props)
    {
        super(props)
    }

    render()
    {

        const button = this.props.button
        const img = this.props.img

        return (
            <header>
                <div id='div_header'>
                    <button onClick={button}><img src={img}/></button>
                </div>
            </header>
        )
    }
}

export default Header