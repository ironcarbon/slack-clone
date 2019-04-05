import React from 'react';
import styled from 'styled-components';
import firebase from '../../firebase';


const RegisterBox = styled.div`
    max-width: 50%;
    margin: auto;
    border: 1px solid #f2f2f2;
`

const Message = styled.div`
    text-align: center;
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid#26250d;
    width: 50%;
`

const Form = styled.form`
    margin: auto;
    width: 100%;
    
   
`

const Input = styled.input`
    display: block;
    padding: 0.80rem;
    margin: 0.85rem auto;
    width: 80%;
    border-radius: 5px;
    text: #f2f2f2;
    font-size: 1rem;
`

const Button = styled.button`
    display: block;
    padding: 1rem;
    width: 80%;
    margin: 1rem auto;
    background: #807d2e;
    text-align: center;
`

const Header = styled.div`
    text-align: center;
    margin: 1rem;
`

class Register extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(createdUser => {
                console.log(createdUser)
            })
            .catch(err => {
                console.log(err);
            });

    }
    render() {
        const { username, email, password, passwordConfirmation } = this.state;
        return (
            <div>
                <Header>Register</Header>
                <RegisterBox>

                    <Form onSubmit={this.handleSubmit}>
                        <Input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={username} />
                        <Input type="email" name="email" placeholder="Email Adress" onChange={this.handleChange} value={email}></Input>
                        <Input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password} />
                        <Input type="password" name="passwordConfirmation" placeholder="Password Confirmation" onChange={this.handleChange} value={passwordConfirmation} />
                        <Button type="submit">Submit</Button>
                        
                    </Form>
                </RegisterBox>
                <Message>Already a user?</Message>
            </div>

        )
    }
}

export default Register;