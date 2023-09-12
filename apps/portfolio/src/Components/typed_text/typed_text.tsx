import { useState, useEffect } from 'react';

function TypedText({typewrite_text, speed, classes}){

    let presentation_typewrite;
    let typewrite_i=0;

    const typeWriter = () => {
        if (typewrite_i < typewrite_text.length) {
            presentation_typewrite.innerHTML += typewrite_text.charAt(typewrite_i);
            typewrite_i++;
            setTimeout(typeWriter, 50);
        }
    }

    //Use effect for rendering the project map
    useEffect(() => {
        presentation_typewrite = document.getElementById('presentation-typewrite');
        setTimeout(typeWriter, speed);
    },[]);

    return(
        <p id="presentation-typewrite" className={'typewrite '+classes}>{presentation_typewrite}</p>
    )
}

export default TypedText;