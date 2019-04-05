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
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: [],
        loading: false
    };

    isFormValid = () => {
        let errors = [];
        let error;

        if (this.isFormEmpty(this.state)) {
            error = { message: "Fill in all fields" };
            this.setState({ errors: errors.concat(error) });
            return false;
        } else if (!this.isPasswordValid(this.state)) {
            error = { message: "Password is invalid" };
            this.setState({ errors: errors.concat(error) });
            return false;
        } else {
            return true;
        }
    };

    isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
        return (
            !username.length ||
            !email.length ||
            !password.length ||
            !passwordConfirmation.length
        );
    };

    isPasswordValid = ({ password, passwordConfirmation }) => {
        if (password.length < 6 || passwordConfirmation.length < 6) {
            return false;
        } else if (password !== passwordConfirmation) {
            return false;
        } else {
            return true;
        }
    };

    displayErrors = errors =>
        errors.map((error, i) => <p key={i}>{error.message}</p>);

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.isFormValid()) {
            
            this.setState({errors:[], loading: true});

            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(createdUser => {
                    console.log(createdUser);
                    this.setState({loading: false});
                })
                .catch(err => {
                    console.error(err);
                    this.setState({errors: this.state.errors.concat(err), loading: false})
                });
        }
    };

    handleInputError = (errors, inputName) => {
        return errors.some(error => 
            error.message.toLowerCase().includes('email')) ? 'error' : ''
    }

    render() {
        const { username, email, password, passwordConfirmation, errors, loading } = this.state;
        return (
            <div>
                <Header>Register</Header>
                <RegisterBox>
                    <Form onSubmit={this.handleSubmit}>
                        <Input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={username} />
                        <Input type="email" name="email" placeholder="Email Adress" onChange={this.handleChange} value={email} className={this.handleInputError(errors, 'email')}></Input>
                        <Input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password} className={this.handleInputError(errors, 'password')}/>
                        <Input type="password" name="passwordConfirmation" placeholder="Password Confirmation" onChange={this.handleChange} value={passwordConfirmation} />
                        <Button disabled={loading} className={loading ? 'loading' : ''} type="submit">Submit</Button>
                    </Form>
                    {this.state.errors.length > 0 && (
                        <div>

                            {this.displayErrors(this.state.errors)}
                        </div>
                    )}
                </RegisterBox>
                <Message>Already a user?</Message>
            </div>

        )
    }
}

export default Register;