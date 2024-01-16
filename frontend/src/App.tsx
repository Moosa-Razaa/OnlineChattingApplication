import React from 'react';
import "./App.module.css"
import LoginSignupForm from './pages/loginn/LoginSignupForm';


const App: React.FC = () => {
  return <LoginSignupForm formState='login'/>
};

export default App;
