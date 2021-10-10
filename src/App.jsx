import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/LoginScreen/Login';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)

  if(user === null)
    return(<Login userLogin={(user) => setUser(user)}/>)

  return (
    
    <div className="app">
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
