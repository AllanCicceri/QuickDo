import './App.css';
import AsideContainer from './components/AsideContents/AsideContainer';
import MainContainer from './components/MainContents/MainContainer';
import Footer from './components/Footer';
import Login from './components/LoginScreen/Login';
import {useSelector} from 'react-redux'

function App() {
  const state = useSelector(state => state.user)

  if(state === null)
    return(<Login />)

  return (
    
    <div className="app">
      <AsideContainer />
      <MainContainer />
     
      {/* <Footer/> */}
    </div>
  );
}

export default App;
