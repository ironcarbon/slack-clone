import React from 'react';
import styled from 'styled-components';


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

const Form = styled.div`
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
    render() {
        return (
            <div>
                <Header>Register</Header>
                <RegisterBox>

                    <Form>
                        <Input type="text" name="username" placeholder="Username" />
                        <Input type="email" name="email" placeholder="Email Adress"></Input>
                        <Input type="password" name="password" placeholder="Password" />
                        <Input type="password" name="password" placeholder="Password Confirmation" />
                        <Button>Submit</Button>
                    </Form>
                </RegisterBox>
                <Message>Already a user?</Message>
            </div>

        )
    }
}

export default Register;