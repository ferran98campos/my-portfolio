import React from 'react';
import ShootingStars from './Components/shooting_stars/shooting_stars';
import WooblyImage from './Components/woobly_image/woobly_image';
import TypedText from './Components/typed_text/typed_text';
import MostUsedLanguages from './Components/most_used_languages/MostUsedLanguages';
import GeneralGithubStats from './Components/general_github_stats/GeneralGithubStats';
import SpotifyCode from './Components/spotify_code/SpotifyCode';
import './App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from 'react-router-hash-link';

export default function App() {
  return (
    <div>
      <section id="navbar" className='flex w-full absolute overflow-hidden justify-end pt-8 font-bold [&>a]:cursor-pointer [&>a]:mr-20' >
          <Link to="#about" >ABOUT</Link>
          <a >SKILLS</a>
          <a >PROJECTS</a>
          <a >CONNECT</a>
      </section>
      <section id="connect-slide" className='flex flex-col h-screen fixed justify-center gap-r right-20 [&>a]:pb-3'>
          <a href="https://www.linkedin.com/in/ferran-campos-llopart/"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="https://github.com/ferran98campos?tab=repositories"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="mailto:ferran98campos@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
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
      <section id="about" className='h-screen flex justify-center'>
        <div className='w-3/5 h-4/5 m-auto grid grid-rows-4 grid-cols-6 gap-4 [&>div]:rounded-md bentoUI'>
          <div className='row-span-1 col-span-2 bg-primary-color clickable'>
            <a className="w-full h-full flex justify-center items-center overflow-hidden rounded-md" href="https://github.com/ferran98campos" title="Github Profilec">
              <GeneralGithubStats></GeneralGithubStats>
            </a>
          </div>
          <div className='hoverable image-bento-parent'>
            <a className="w-full h-full flex justify-center items-center overflow-hidden rounded-md" href="https://www.kth.se/en/studies/master/interactive-media-technology/msc-interactive-media-technology-1.593765" title="My Education">
              <img className='min-w-full min-h-full shrink-0 image-bento' src={process.env.PUBLIC_URL+'/img/KTH.png'}></img>
              <div className="hover-content">
                🎓 Msc Interactive Media Technology
              </div>
            </a>
          </div>
          <div className='row-span-1 col-span-2 bg-terciary-color clickable'>
            <a className="w-full h-full flex justify-center items-center overflow-hidden rounded-md" href="https://open.spotify.com/playlist/653CjTKx4mQiPuNg7RiwtM?si=a167333fbf874ab1" title="My music">
              <SpotifyCode></SpotifyCode>
            </a>
          </div>
          <div className='image-bento-parent hoverable'>
            <a className="w-full h-full flex justify-center items-center overflow-hidden rounded-md" href="https://armada.nu/" title="More about Armada">
              <img className='min-w-full min-h-full shrink-0 image-bento' src={process.env.PUBLIC_URL+'/img/ths_armada.png'}></img>
              <div className="hover-content">
                💻 Back End Development
              </div>
            </a>
          </div>
          <div className='row-span-2 col-span-1 flex justify-center items-center overflow-hidden hoverable image-bento-parent'>
            <img className='min-w-full min-h-full shrink-0 image-bento' src={process.env.PUBLIC_URL+'/img/photos.jpg'}></img>
            <div className="hover-content">
              📸 Photography
            </div>
          </div>
          <div className='flex justify-center items-center overflow-hidden hoverable image-bento-parent'>
            <img className='min-w-full min-h-full shrink-0 image-bento' src={process.env.PUBLIC_URL+'/img/explore.jpg'}></img>
            <div className="hover-content">
              ✈️ Explore
            </div>
          </div>
          <div className='row-span-2 col-span-2 flex justify-center bg-secondary-color dark-color font-bold clickable'>
            <a className='flex justify-center' href="https://www.linkedin.com/in/ferran-campos-llopart/" title="LinkedIn Profile"><p className='p-10 m-auto text-left text-6xl font-bold montserrat'>ABOUT ME</p></a>
          </div>
          <div className='row-span-1 col-span-2 bg-primary-color clickable'>
            <a className="w-full h-full flex justify-center items-center overflow-hidden rounded-md" href="https://github.com/ferran98campos" title="Github Profile">
              <MostUsedLanguages></MostUsedLanguages>
            </a>
          </div>
          <div className='flex justify-center items-center overflow-hidden hoverable image-bento-parent'>
            <img className='min-w-full min-h-full shrink-0 image-bento' src={process.env.PUBLIC_URL+'/img/stockholm.jpg'}></img>
            <div className="hover-content">
                📍 Stockholm, Sweden
            </div>
          </div>
          <div className='row-span-3 col-span-2 image-bento-parent hoverable'>
            <a className="w-full h-full flex justify-center items-center overflow-hidden rounded-md" href="https://drive.google.com/file/d/1MOV6zC2yQS_L5yjnjP48n7Cq3-LA56El/view?usp=drive_link" title="To my resume">
              <img className='min-w-full min-h-full shrink-0 image-bento' src={process.env.PUBLIC_URL+'/img/wordcloud.png'}></img>
              <div className="hover-content">
              📄 To my resume
              </div>
            </a>
          </div>
          <div className='row-span-2 col-span-4 flex justify-center bg-primary-color dark-color font-bold non-clickable'>
            <p className='p-10 m-auto text-center text-3xl font-bold montserrat'>The user is the <span className='secondary-color'>cornerstone</span> of software development</p>
          </div>
        </div>
      </section>
    </div>
    
  )
}