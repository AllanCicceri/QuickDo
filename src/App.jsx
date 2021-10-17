import './App.css';
import AsideContainer from './components/AsideContents/AsideContainer';
import MainContainer from './components/MainContents/MainContainer';
import Footer from './components/Footer';
import Login from './components/LoginScreen/Login';
import { useEffect,useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Api from './api/api';
import ProjectActions from './redux/actions/Project.actions';

function App() {
  const userState = useSelector(state => state.user)
  const projectsState = useSelector(state => state.project)
  const dispatch = useDispatch()

  async function getProjects() {
    const userProjects = await Api.getProjects(userState.id)
    dispatch(ProjectActions.getAllProjects(userProjects))
  }

  useEffect(() => {
    userState !== null && getProjects()
  }, [userState])

  const projectsToRender = useMemo(() => projectsState, projectsState)
  useEffect(() => {
    projectsToRender !== null && getProjects()
  }, [projectsToRender])


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
