import React from 'react';
import "./App.module.css"
import OTPScreen from './components/OtpScreen';
import Profile from './components/Profile';
import LoginSignupForm from './components/LoginSignupForm';


const App: React.FC = () => {
  return <LoginSignupForm state='login'/>
};

export default App;
