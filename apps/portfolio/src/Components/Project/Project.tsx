import React from 'react';
import './Project.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faUnity, faReact, faAngular, faSpotify } from '@fortawesome/free-brands-svg-icons'


interface Project{
    name: string;
    description: string;
    image: string;
    video: string;
    links: string[];
    tools: string[];
}

function Project({project, index}){
    return(
        <div className='flex project m-auto'>
                <div className="project-container relative block overflow-hidden h-auto rounded-xl">
                    <video autoPlay muted loop className="project-video">
                        <source src={process.env.PUBLIC_URL+project.video} type="video/mp4"></source>
                    </video>
                    <div className="project-content absolute top-0">
                            <div className='bg-dark-color project-title m-auto p-3 rounded-md'>
                                <h3>{project.name}</h3>
                            </div>
                            <img className='project-image' src={process.env.PUBLIC_URL+project.image}></img>
                            <div className='project-desc'>
                                <p>
                                {project.description.replaceAll("[SPACE]", "\n\n")}
                                </p> 
                            </div>
                            <div className="project-links">
                                {
                                    project.links.map((link, i) => {
                                        const strippedString = link.slice(1, -1); // Remove the square brackets
                                        const parts = strippedString.split(', ').map(item => item.trim());
                                        let name = parts[0];
                                        let href = parts[1];
                                        return(
                                            <a href={href} key={index + "_" + i + "link"}>{name}</a>
                                        )
                                    })
                                }
                            </div>
                            <div className="row-span-2 col-span-1 flex flex-col h-full justify-end gap-4 project-tools">
                                {
                                    project.tools.map((tool, i) => {
                                        const strippedString = tool.slice(1, -1); // Remove the square brackets
                                        const parts = strippedString.split(', ').map(item => item.trim());
                                        let family = parts[0];
                                        let name = parts[1];
                                        return(
                                            <FontAwesomeIcon key={index + "_" + i + "icon"} icon={[family, name]} />
                                        )
                                    })
                                }
                            </div>
                    </div>
                </div>
        </div>

    )
}

export default Project;