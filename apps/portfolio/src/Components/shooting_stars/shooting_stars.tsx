import { useState, useEffect } from 'react';

const ShootingStars = () => {

  let shooting_stars = [];

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function positionShootingStar(){

  }

  function controlAnimationShootingStar(){
    
  }

  useEffect(() => {
    const shooting_star = document.createElementNS('http://www.w3.org/2000/svg','rect');

    /*Random generation and positioning of shooting stars */
    let width = randomIntFromInterval(50,200);
    let height = randomIntFromInterval(1,2);
    let x = randomIntFromInterval(-width, window.innerWidth/3);

    /*Creation of the shooting star element*/ 
    shooting_star.setAttribute('width', width.toString());
    shooting_star.setAttribute('height', height.toString());
    shooting_star.setAttribute('x', x.toString());
    shooting_star.setAttribute('y', (-width).toString());
    shooting_star.setAttribute('rx', '1.5');
    shooting_star.setAttribute('transform', 'rotate(38, 159, 195)');
    shooting_star.setAttribute('opacity', '0.7');

    shooting_star.classList.add('shooting-star');
    shooting_star.animate(  [
      // keyframes
      { transform: "translateY(0px)" },
      { transform: "translateY(300px)" },
    ],
    {
      // timing options
      duration: 1000,
      iterations: 1,
    });
    const canvas = document.getElementById('meteor-area')?.appendChild(shooting_star);
    shooting_star.addEventListener("animationend", (event) => {
      shooting_star.parentNode?.removeChild(shooting_star);
      console.log('duduj')
    });
    
  },[]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="meteor-grad" gradientTransform="rotate(270)">
        <stop stopColor="hsl(238, 82%, 13%)" stopOpacity="1" offset="0%"></stop>
        <stop stopColor="#CB5656" stopOpacity="1" offset="45%"></stop>
        <stop stopColor="#FAEFE6" stopOpacity="1" offset="100%"></stop>
        </linearGradient>
      </defs>
        
      <g fill="url(#meteor-grad)" id="meteor-area">
        /* Shooting stars will be generated in here*/
      </g>
    </svg>
  )
}

export default ShootingStars;