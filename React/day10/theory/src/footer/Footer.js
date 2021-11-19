import React from 'react'

class Footer extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render(){
        const {
            firstName,
            lastName,
        } = this.props.data

        return (
            <footer>
                <p>{lastName}, {firstName}</p>
            </footer>
        )
    }
}

export default Footer