import { useState, useEffect } from 'react';
import db from '../../firebase/firebase.config'
import { collection, getDocs, query} from "firebase/firestore";
import Project from '../Project/Project';

function ProjectList({role}){

    const [projectList, setProjectList] = useState<Project[]>([]);

    useEffect(() => {
        setProjectList([]);
        getNumberProjects();
    },[]);

    const getNumberProjects = async () => {
        
        let dbName = role.replace(/\//g, '');
        try{
            const projects = await getDocs(query(collection(db, dbName)));
            projects.docs.forEach((project) => {
                let newProject:Project = {
                    name: project.data().name,
                    description: project.data().description,
                    image: project.data().image,
                    video: project.data().video,
                    links: project.data().links,
                    tools: project.data().tools
                }
                let newList = projectList;
                newList?.push(newProject);
                setProjectList(newList);
            });
        } catch (e) {
            console.log("Error getting cached document:", e);
        }
    }

    return(
        <div>
            {projectList.map((project, i) => {
                            return(
                                <Project key={'project '+i} index={'project '+i} project={project}></Project>
                            )
                })
            }
        </div>
    )
}

export default ProjectList;