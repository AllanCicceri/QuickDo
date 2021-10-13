import './ListOfProjects.css'
import Project from './Project'

function ListOfProjects(){
    const projects = [{id:1,title:"Pojeto1"}, {id:2,title:"Pojeto2"}, {id:3,title:"Pojeto3"}]

    return(
        <aside className="ListOfProjects">
            {projects.map((item) => (
                <Project key={item.id} item={item}/>
            ))}
        </aside>
    )
}

export default ListOfProjects