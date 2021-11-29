import React from 'react'

const options = [
    {
        value: '',
        label: '-- Select Country --',
    },
    {
        value: 'Finland',
        label: 'Finland',
    },
    {
        value: 'Sweden',
        label: 'Sweden',
    },
    {
        value: 'Norway',
        label: 'Norway',
    },
    {
        value: 'Denmark',
        label: 'Denmark',
    },
]

const countries = options.map(({value, label}) => (
    <option value={value}>{label}</option>
))

class StudentFull extends React.Component
{

    state = {
        name: '',
        surname: '',
        email: '',
        country: '',
        tel: '',
        dateOfBirth: '',
        favouriteColour: '',
        weight: '',
        gender: '',
        skills: {
            html: false,
            css: false,
            javascript: false,
        }
    }

    handleChange = (e) =>
    {
        const { name, value, type, checked } = e.target

        if ( type === 'checkbox')
        {
            this.setState({
                skills: {...this.state.skills, [name]: checked},
            })
        }
        else
        {
            this.setState({
                [name]: value
            })
        }
    }

    handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log('Done')
    }

    render()
    {
        return (
            <div>
                <h3>Student Full details</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Name'
                            value={this.state.name}
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <div>
                        <input
                            type='text'
                            name='surname'
                            id='surname'
                            placeholder='Surname'
                            value={this.state.surname}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='tel'
                            name='tel'
                            id='tel'
                            placeholder='Telephone number'
                            value={this.state.tel}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='date'
                            name='dateOfBirth'
                            id='dateOfBirth'
                            placeholder='Date of birth'
                            value={this.state.dateOfBirth}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='color'
                            name='favouriteColour'
                            id='favouriteColour'
                            value={this.state.favouriteColour}
                            placeholder='Fav colour'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='number'
                            name='weight'
                            id='weight'
                            value={this.state.weight}
                            placeholder='Weight'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <div>
                            <input
                                type='radio'
                                name='gender'
                                id='female'
                                value='Female'
                                checked={this.state.gender === 'Female'}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='gender'
                                id='male'
                                value='Male'
                                checked={this.state.gender === 'Male'}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <select name='country' onChange={this.handleChange}>
                            {countries}
                        </select>
                    </div>
                    <div>
                        <div>
                            <input
                                type='checkbox'
                                id='html'
                                onChange={this.handleChange}
                                name='html'
                            />
                            <label>HTML</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                id='css'
                                name='css'
                                onChange={this.handleChange}
                            />
                            <label>CSS</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                name='javascript'
                                id='javascript'
                                onChange={this.handleChange}
                            />
                            <label>JavaScript</label>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default StudentFull