import React from 'react';
import ShootingStars from './Components/shooting_stars/shooting_stars';
import WooblyImage from './Components/woobly_image/woobly_image';
import TypedText from './Components/typed_text/typed_text';
import './App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from 'react-router-hash-link';

export default function App() {
  return (
    <div>
      <section id="navbar" className='flex w-full absolute overflow-hidden justify-end pt-8 font-bold' >
          <Link to="#about" className='cursor-pointer mr-20'>ABOUT</Link>
          <a className='cursor-pointer mr-20'>SKILLS</a>
          <a className='cursor-pointer mr-20'>PROJECTS</a>
          <a className='cursor-pointer mr-20'>CONNECT</a>
      </section>
      <section id="connect-slide" className='flex flex-col h-screen fixed justify-center gap-r right-20'>
          <a className='pb-3' href="https://www.linkedin.com/in/ferran-campos-llopart/"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a className='pb-3' href="https://github.com/ferran98campos?tab=repositories"><FontAwesomeIcon icon={faGithub}/></a>
          <a className='pb-3' href="mailto:ferran98campos@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
      </section>
      <section className='h-screen'>
        <div className='h-full flex gap-20'>
          <div className='basis-11/20 flex flex-col gap-0.5 justify-center items-end'>
            <h1 className='text-5xl'>Ferran <b className='secondary-color'>Campos Llopart</b></h1>
            <TypedText typewrite_text="I'm a full-stack developer" speed={50} classes='text-2xl inconsolata'></TypedText>
            
          </div>
          <div className='basis-9/20 m-auto items-end h-2/5'>
            <WooblyImage classes={'h-full border-4 bg-black'} path={process.env.PUBLIC_URL+'/img/persona_photo.png'}></WooblyImage>
          </div>
        </div>
        
      </section>
    </div>
    
  )
}