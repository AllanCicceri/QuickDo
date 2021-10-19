import './App.css';
import AsideContainer from './components/AsideContents/AsideContainer';
import MainContainer from './components/MainContents/MainContainer';
import Footer from './components/Footer';
import Login from './components/LoginScreen/Login';
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Api from './api/api';
import ProjectActions from './redux/actions/Project.actions';


function App() {
  const userState = useSelector(state => state.user)
  const projectStates = useSelector(state => state.project)
  const dispatch = useDispatch()

  const projectsState = useMemo(() => {

  },[projectStates])
  


  async function getProjects() {
    const userProjects = await Api.getProjects(userState.id)
    dispatch(ProjectActions.getAllProjects(userProjects))
  }

  useEffect(() => {
    userState !== null && getProjects()
  }, [userState])


  useEffect(() => {
    userState !== null && getProjects()
  }, [projectsState])


  if (userState === null)
    return (<Login />)

  return (

    <div className="app">
      <AsideContainer />
      <MainContainer />
    </div>
  );
}

export default App;
