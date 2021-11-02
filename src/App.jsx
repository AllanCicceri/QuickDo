import './App.css';
import AsideContainer from './components/AsideContents/AsideContainer';
import MainContainer from './components/MainContents/MainContainer';
import Login from './components/LoginScreen/Login';
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Api from './api/api';
import ActionTypes from './redux/actions/ActionTypes';


function App() {
  const userState = useSelector(state => state.user)
  const userProjectsState = useSelector(state => state.project)
  const dispatch = useDispatch()

  const projectsState = useMemo(() => {

  },[userProjectsState])
  


  async function getProjects() {
    const userProjects = await Api.getProjects(userState.id)
    dispatch({type:ActionTypes.SET_USER_PROJECTS, userProjects})
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
