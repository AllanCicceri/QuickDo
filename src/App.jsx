import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/LoginScreen/Login';
import { useState } from 'react';
import {useSelector} from 'react-redux'

function App() {
  const state = useSelector(state => state.user)

  if(state === null)
    return(<Login />)

  return (
    
    <div className="app">
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
