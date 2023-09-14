import React from 'react';
import './MostUsedLanguages.css'

function MostUsedLanguages(){
  return(
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        preserveAspectRatio="xMinYMin meet"
        aria-labelledby="descId"
      >
        <desc id="descId"></desc>

        <rect
          data-testid="card-bg"
          x="0.5"
          y="0.5"
          rx="4.5"
          height="99%"
          stroke="#e4e2e2"
          width="100%"
          fill="#fcf7f5"
          stroke-opacity="0"
        />

        
      <g
        data-testid="card-title"
        transform="translate(25, 35)"
      >
        <g transform="translate(0, 0)">
      <text
        x="0"
        y="0"
        className="header"
        data-testid="header"
      >Most Used Languages</text>
    </g>
      </g>
    

        <g
          data-testid="main-card-body"
          transform="translate(0, 55)"
        >
          
    <svg data-testid="lang-items" x="25">
      
  
  <mask id="rect-mask">
      <rect x="0" y="0" width="250" height="8" fill="white" rx="5"/>
    </mask>
    
        <rect
          mask="url(#rect-mask)"
          data-testid="lang-progress"
          x="0"
          y="0"
          width="134.59"
          height="8"
          fill="#178600"
        />
      
        <rect
          mask="url(#rect-mask)"
          data-testid="lang-progress"
          x="134.59"
          y="0"
          width="58.32"
          height="8"
          fill="#9400ff"
        />
      
        <rect
          mask="url(#rect-mask)"
          data-testid="lang-progress"
          x="192.91"
          y="0"
          width="25.83"
          height="8"
          fill="#222c37"
        />
      
        <rect
          mask="url(#rect-mask)"
          data-testid="lang-progress"
          x="218.74"
          y="0"
          width="12.7"
          height="8"
          fill="#f1e05a"
        />
      
        <rect
          mask="url(#rect-mask)"
          data-testid="lang-progress"
          x="231.44"
          y="0"
          width="19.84"
          height="8"
          fill="#563d7c"
        />
      
        <rect
          mask="url(#rect-mask)"
          data-testid="lang-progress"
          x="241.28"
          y="0"
          width="18.71"
          height="8"
          fill="#3178c6"
        />
      
  
    <g transform="translate(0, 25)">
      <g transform="translate(0, 0)"><g transform="translate(0, 0)">
    <g className="stagger">
      <circle cx="5" cy="6" r="5" fill="#178600" />
      <text data-testid="lang-name" x="15" y="10" className='lang-name'>
        C# 53.84%
      </text>
    </g>
  </g><g transform="translate(0, 25)">
    <g className="stagger">
      <circle cx="5" cy="6" r="5" fill="#9400ff" />
      <text data-testid="lang-name" x="15" y="10" className='lang-name'>
        ASP.NET 23.33%
      </text>
    </g>
  </g><g transform="translate(0, 50)">
    <g className="stagger">
      <circle cx="5" cy="6" r="5" fill="#222c37" />
      <text data-testid="lang-name" x="15" y="10" className='lang-name'>
        ShaderLab 10.33%
      </text>
    </g>
  </g></g><g transform="translate(150, 0)"><g transform="translate(0, 0)">
    <g className="stagger">
      <circle cx="5" cy="6" r="5" fill="#f1e05a" />
      <text data-testid="lang-name" x="15" y="10" className='lang-name'>
        JavaScript 5.08%
      </text>
    </g>
  </g><g transform="translate(0, 25)">
    <g className="stagger">
      <circle cx="5" cy="6" r="5" fill="#563d7c" />
      <text data-testid="lang-name" x="15" y="10" className='lang-name'>
        CSS 3.94%
      </text>
    </g>
  </g><g transform="translate(0, 50)">
    <g className="stagger">
      <circle cx="5" cy="6" r="5" fill="#3178c6" />
      <text data-testid="lang-name" x="15" y="10" className='lang-name'>
        TypeScript 3.48%
      </text>
    </g>
  </g></g>
    </g>
  
    </svg>
  
        </g>
      </svg>
    
  )
}

export default MostUsedLanguages;