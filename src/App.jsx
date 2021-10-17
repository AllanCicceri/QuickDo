import './App.css';
import AsideContainer from './components/AsideContents/AsideContainer';
import MainContainer from './components/MainContents/MainContainer';
import Footer from './components/Footer';
import Login from './components/LoginScreen/Login';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Api from './api/api';
import ProjectActions from './redux/actions/Project.actions';

function App() {
  const userState = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getProjects() {
      const userProjects = await Api.getProjects(userState.id)
      dispatch(ProjectActions.getAllProjects(userProjects))
    }

    userState !== null && getProjects()
  
  }, [userState])

  if (userState === null)
    return (<Login />)

  return (

    <div className="app">
      <AsideContainer />
      <MainContainer />

      {/* <Footer/> */}
    </div>
  );
}

export default App;
