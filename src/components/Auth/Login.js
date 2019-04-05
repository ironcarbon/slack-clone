import React from 'react';
import styled from 'styled-components';
import firebase from '../../firebase';
import {Link} from 'react-router-dom';


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

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        errors: [],
        loading: false,
    };

    displayErrors = errors =>
        errors.map((error, i) => <p key={i}>{error.message}</p>);

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.isFormValid(this.state)) {
            this.setState({errors:[], loading: true});
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(signedInUser => {
                    console.log(signedInUser)
                })
                .catch(err => {
                    console.log(err);
                    this.setState({
                        errors: this.state.errors.concat(err),
                        loading: false
                    })
                })
        }
    };


    isFormValid = ({email, password}) => email && password
    

    handleInputError = (errors, inputName) => {
        return errors.some(error => 
            error.message.toLowerCase().includes('email')) ? 'error' : ''
    }

    render() {
        const { email, password, errors, loading } = this.state;
        return (
            <div>
                <Header>Login to Chit Chat</Header>
                <RegisterBox>
                    <Form onSubmit={this.handleSubmit}>
                       
                        <Input type="email" name="email" placeholder="Email Adress" onChange={this.handleChange} value={email} className={this.handleInputError(errors, 'email')}></Input>
                        <Input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password} className={this.handleInputError(errors, 'password')}/>
                       
                        <Button disabled={loading} className={loading ? 'loading' : ''} type="submit">Submit</Button>
                    </Form>
                    {this.state.errors.length > 0 && (
                        <div>

                            {this.displayErrors(this.state.errors)}
                        </div>
                    )}
                </RegisterBox>
                <Message>
                    Don't have an account? <Link to="/register">Register</Link>
                    </Message>
            </div>

        )
    }
}

export default Login;