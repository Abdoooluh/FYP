import logo from './logo.svg';
import './App.css';
import LoginPage from './loginpage.jsx'
import {Button, Checkbox, Form, Input } from 'antd'
import LoginSignup from './Components/LoginSignupPage/LoginSignupPage';
import Listing from './Components/Dashboard/Listings';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const App = () => (
  <Listing/>
);
export default App;