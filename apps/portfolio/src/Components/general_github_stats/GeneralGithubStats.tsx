import React from 'react';
import './GeneralGithubStats.css'

function GeneralGithubStats(){
  return(

    <svg
    width="100%"
    height="100%"
    viewBox="0 0 467 195"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
    role="img"
    aria-labelledby="descId"
  >
    <desc id="descId">Total Stars Earned: 2, Total Commits in 2023 : 2, Total PRs: 8, Total Issues: 2, Contributed to (last year): 2</desc>

    <rect
      data-testid="card-bg"
      x="0.5"
      y="0.5"
      rx="4.5"
      height="100%"
      stroke="#e4e2e2"
      width="466"
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
  >Ferran Campos' GitHub Stats</text>
</g>
  </g>


    <g
      data-testid="main-card-body"
      transform="translate(0, 55)"
    >
      
<g data-testid="rank-circle"
      transform="translate(390.5, 47.5)">
    <circle className="rank-circle-rim" cx="-10" cy="8" r="40" />
    <circle className="rank-circle" cx="-10" cy="8" r="40" />
    <g className="rank-text">
      
    <text x="-5" y="3" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" data-testid="level-rank-icon">
      C+
    </text>
  
    </g>
  </g>
<svg x="0" y="0">
  <g transform="translate(0, 0)">
<g className="stagger" transform="translate(25, 0)">
  
<svg data-testid="icon" className="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
  <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
</svg>

  <text className="stat  bold" x="25" y="12.5">Total Stars Earned:</text>
  <text
    className="stat  bold"
    x="219.01"
    y="12.5"
    data-testid="stars"
  >2</text>
</g>
</g><g transform="translate(0, 25)">
<g className="stagger" transform="translate(25, 0)">
  
<svg data-testid="icon" className="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
  <path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"/>
</svg>

  <text className="stat  bold" x="25" y="12.5">Total Commits (2023):</text>
  <text
    className="stat  bold"
    x="219.01"
    y="12.5"
    data-testid="commits"
  >118</text>
</g>
</g><g transform="translate(0, 50)">
<g className="stagger" transform="translate(25, 0)">
  
<svg data-testid="icon" className="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
  <path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/>
</svg>

  <text className="stat  bold" x="25" y="12.5">Total PRs:</text>
  <text
    className="stat  bold"
    x="219.01"
    y="12.5"
    data-testid="prs"
  >8</text>
</g>
</g><g transform="translate(0, 75)">
<g className="stagger" transform="translate(25, 0)">
  
<svg data-testid="icon" className="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
  <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"/>
</svg>

  <text className="stat  bold" x="25" y="12.5">Total Issues:</text>
  <text
    className="stat  bold"
    x="219.01"
    y="12.5"
    data-testid="issues"
  >2</text>
</g>
</g><g transform="translate(0, 100)">
<g className="stagger" transform="translate(25, 0)">
  
<svg data-testid="icon" className="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
  <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
</svg>

  <text className="stat  bold" x="25" y="12.5">Contributed to (last year):</text>
  <text
    className="stat  bold"
    x="219.01"
    y="12.5"
    data-testid="contribs"
  >2</text>
</g>
</g>
</svg>

    </g>
  </svg>

  )
}

export default GeneralGithubStats;