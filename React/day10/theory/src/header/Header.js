import React from 'react'

class Header extends React.Component {
    constructor(props)
    {
        super(props)
    }

    render (){

        const {
            welcome,
            title,
            subtitle,
            firstName,
            lastName,
            date,
        } = this.props.data

        return(
            <header>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    {firstName}, {lastName}
                </p>
                <small>{date}</small>
            </header>
        )
    }
}

export default Header