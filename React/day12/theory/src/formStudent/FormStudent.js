import React from 'react'

class Student extends React.Component
{

    state = {
        firstName2: '',
        lastName: '',
        country: '',
        title: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        console.log(this.state)
    }

    render()
    {

        return (
            <div>
                <h3>Add student</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type='text'
                            name='firstName2'
                            id='firstName'
                            placeholder='First name'
                            value={this.state.firstName2}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='lastName'
                            id='lastName'
                            placeholder='Last name'
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='country'
                            placeholder='Country'
                            value={this.state.country}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='title'
                            placeholder='Title'
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Student