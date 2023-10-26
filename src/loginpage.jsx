import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(45deg, #121212, #1b1b1b);
`;

const LoginForm = styled.div`
    background-color: #2c2c2c;
    width: 450px;
    padding: 40px 60px; 
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Title = styled.h1`
    font-family: 'Arial', sans-serif;
    color: #fff;
    font-size: 28px;
    margin-bottom: 20px;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #ccc;
`;

const Input = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 12px 16px;
    margin-bottom: 20px;
    border: 1px solid #555;
    border-radius: 8px;
    background-color: #3c3c3c;
    color: #ddd;
    font-family: 'Arial', sans-serif;
    &:focus {
        outline: none;
        border-color: #0078d7;
    }
`;

const Button = styled.button`
    background-color: #0078d7;
    border: none;
    border-radius: 6px;
    padding: 14px 18px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #005cb2;
    }
`;

const RememberMe = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const HelpLink = styled.a`
    color: #0078d7;
    text-decoration: none;
    font-size: 14px;
    &:hover {
        text-decoration: underline;
    }
`;

const LoginPage = () => {
    return (
        <Container>
            <LoginForm>
                <Title>Log In</Title>
                <Label>Username</Label>
                <Input type="text" placeholder="Enter your Username" />
                <Label>Password</Label>
                <Input type="password" placeholder="Enter your Password" />
                <RememberMe>
                    <Checkbox type="checkbox" />
                    Remember Me
                </RememberMe>
                <Button>Log In</Button>
                <HelpLink>Forgot Password?</HelpLink>
            </LoginForm>
        </Container>
    );
}

export default LoginPage;
