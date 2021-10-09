import './App.css';
import Content from './components/Content';
import ListOfProjects from './components/ListOfProjects';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <body className="appBody">
        <aside className="projects-container">
          <div className="projects-header">
            <div className="projects-label">Projects</div>
            <div className="projects-insertProject">+ Add</div>
          </div>
          <ListOfProjects/>
        </aside>
        <Content />
      </body>
    </div>
  );
}

export default App;
