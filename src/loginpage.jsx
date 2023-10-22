import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1b1b1b; // Darker background color
`;

const LoginForm = styled.div`
    background-color: #2c2c2c;
    width: 450px; // Adjusted width to match the second image
    padding: 40px 60px; 
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start; // Align to the start to match the second image
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #aaa; // Adjusted the color to a lighter gray
`;

const Input = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 12px 16px; 
    margin-bottom: 15px;
    border: 1px solid #555;
    border-radius: 6px;
    background-color: #3c3c3c;
    color: #ddd;
    &:focus {
        outline: none;
        border-color: #0078d7;
    }
`;

const Button = styled.button`
    background-color: #0078d7;
    border: none;
    border-radius: 4px;
    padding: 12px 16px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #005cb2; // Slightly darker shade on hover
    }
`;

const RememberMe = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const HelpLink = styled.a`
    color: #0078d7;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;


const LoginPage = () => {
    return (
        <Container>
            <LoginForm>
                <Label>SIGN IN WITH ACCOUNT NAME</Label>
                <Input type="text" placeholder="Sign in with account name" />
                <Label>PASSWORD</Label>
                <Input type="password" placeholder="Password" />
                <RememberMe>
                    <Checkbox type="checkbox" />
                    Remember me
                </RememberMe>
                <Button>Sign in</Button>
                <HelpLink>Help, I can't sign in</HelpLink>
            </LoginForm>
        </Container>
    );
}

export default LoginPage;
