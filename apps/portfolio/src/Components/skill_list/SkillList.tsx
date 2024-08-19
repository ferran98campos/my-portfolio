import { useState, useEffect } from 'react';
import db from "../../firebase/firebase.js";
import { collection, getDocs, query} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WooblyImage from '../woobly_image/woobly_image';
import './SkillList.css'

export interface Skill{
    family: any;
    name: any;
    x?: string;
    y?: string;
}

function SkillList(){

    const [skillList, setskillList] = useState<Skill[]>([]);
    const [windowResizing, setWindowResizing] = useState(false);

    useEffect(() => {
        if(skillList.length == 0)
            getSkills(); 
            //positionSkills();

            let timeout;
            const handleResize = () => {
              clearTimeout(timeout);
        
              setWindowResizing(true);
        
              timeout = setTimeout(() => {
                setWindowResizing(false);
                positionSkills();
              }, 200);
            }
            window.addEventListener("resize", handleResize);
        
    },[skillList, windowResizing]);

    const getSkills = async () => {
        let dbName = 'skills';
        try{
            const skills = await getDocs(query(collection(db, dbName)));
            skills.docs.forEach((skill) => {
                let newSkills:Skill = {
                    family: skill.data().family,
                    name: skill.data().name,
                }
                let newList = skillList;
                newList?.push(newSkills);
                setskillList(newList); 
            });
            positionSkills();
        } catch (e) {
            console.log("Error getting cached document:", e);
        }
    }

    const positionSkills = () => {
        
        var divisions = 360 / skillList.length;
        var parent = document.getElementById('skill-parent');
        var radius = parent!.offsetHeight;
        var offsetToParentCenter = parent!.offsetWidth / 2; //assumes parent is square
        var offsetToChildCenter = radius/7.5;
        var totalOffset = offsetToParentCenter - offsetToChildCenter;
        for (var i = 0; i < skillList.length; ++i) {
            let x = Math.cos((divisions * i) * (Math.PI / 180)) * radius;
            let y = Math.sin((divisions * i) * (Math.PI / 180)) * radius;

            let copySkills = [...skillList];
            copySkills[i].y = (y + totalOffset).toString() + "px";
            copySkills[i].x = (x + totalOffset).toString() + "px";
            setskillList(copySkills);
        }
        parent!.style.animation = "rotation 20s infinite linear";
    }

    return(
        <div className='grow flex justify-center align-center'>
            <div id="skill-parent" className='m-auto flex justify-center items-center'>
                <WooblyImage id='skill-image' classes={'h-full border-4 bg-black'} path={process.env.PUBLIC_URL+'/img/informal-photo.jpg'}></WooblyImage>
            {
                skillList.map((skill, i) => {
                            return(
                                <FontAwesomeIcon key={i + "skill"} icon={[skill.family, skill.name]} className='skill' style={{top: skill.y, left: skill.x}}/>
                            )
                })
            }
            </div>
        </div>
    )
}

export default SkillList;