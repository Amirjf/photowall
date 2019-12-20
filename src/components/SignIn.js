import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';

export default class SignIn extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);

        // this.state = {
        //     user: {
        //         first: '',
        //         last: '',
        //         username: '',
        //         password: ''
        //     }
        // }
    }

    handleChange(e) {
        e.preventDefault();
        const firstName = e.target.elements.first.value;
        const lastName = e.target.elements.last.value;
        const userName = e.target.elements.user.value;
        const password = e.target.elements.pass.value;

        const user = {
            userid: Math.floor(Math.random * 1000),
            first: firstName,
            last: lastName,
            user: userName,
            pass: password
        }
        this.props.user.startAddingUser(user);
        this.props.onHistory.push('/');
    }


    render() {
        return (
            <div>
                <Grid
                    container
                    spacing={1}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '80vh' }}
                >
                    <Paper className="sign-form">
                        <h2>Sign Up</h2>
                        
                            <form onSubmit={this.handleChange}>
                                <TextField
                                    label="First Name"
                                    name='first'
                                    margin="normal"
                                    className='promo'
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-dense"
                                    label="Last Name"
                                    name='last'
                                    margin="normal"
                                    className='promo'
                                    variant="outlined"
                                    InputProps={{
                                        style: {
                                                
                                        }
                                    }}
                                />
                                <TextField
                                    id="outlined-dense"
                                    label="User Name"
                                    name='user'
                                    margin="normal"
                                    className='promo'
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    margin="normal"
                                    name='pass'
                                    className='promo'
                                    variant="outlined"
                                />
                                <div className="btn-container">
                                <button className="sign-btn" >Sign Up</button>
                                </div>
                                </form>
                        

                    </Paper>
                </Grid>

                

            </div>
        )
    }
}

