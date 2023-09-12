import { useEffect } from 'react';

function WooblyImage({path, classes}){

    let portfolio_image;
    let image_top, image_right, image_bottom, image_left;
    let vel_top, vel_right, vel_bottom, vel_left;
    let interval;

    const generateRandomBetween = (min, max, exclude) => {
        let ranNum = Math.floor(Math.random() * (max - min)) + min;
    
        if (ranNum === exclude) {
            ranNum = generateRandomBetween(min, max, exclude);
        }
    
        return ranNum;  
    }   

    const portfolioImageAnimation = () => {
        if(image_top + vel_top >= 70 || image_top + vel_top <= 30 )
            vel_top *=-1;
        if(image_bottom + vel_bottom >= 70 || image_bottom+ vel_bottom <= 30 )
            vel_bottom *=-1;
        if(image_right + vel_right >= 70 || image_right + vel_right <= 30 )
            vel_right *=-1;
        if(image_left + vel_left >= 70 || image_left+ vel_left <= 30 )
            vel_left *=-1;

        image_top += vel_top;
        image_bottom += vel_bottom;
        image_right += vel_right;
        image_left += vel_left;

        portfolio_image.style.borderRadius = image_top+'% '+ (100-image_top)+'% ' + image_right+'% '+ (100-image_right)+'% / ' + image_bottom+'% '+ (100-image_bottom)+'% ' + image_left+'% '+ (100-image_left)+'% ';
    }

    //Use effect for rendering the project map
    useEffect(() => {
        portfolio_image = document.getElementById('portfolio-image');
        image_top = generateRandomBetween(30, 70, null);
        image_right = generateRandomBetween(30, 70, null);
        image_bottom = generateRandomBetween(30, 70, null);
        image_left = generateRandomBetween(30, 70, null);
        vel_top = generateRandomBetween(-0.2, 0.2, 0);
        vel_right = generateRandomBetween(-0.2, 0.2, 0);
        vel_bottom = generateRandomBetween(-0.2, 0.2, 0);
        vel_left = generateRandomBetween(-0.2, 0.2, 0);

        portfolio_image.style.borderRadius = image_top+'% '+ (100-image_top)+'% ' + image_right+'% '+ (100-image_right)+'% / ' + image_bottom+'% '+ (100-image_bottom)+'% ' + image_left+'% '+ (100-image_left)+'% ';
        interval = setInterval(portfolioImageAnimation, 20);
    },[]);

    return (
        <img id='portfolio-image' className={classes} src={path}></img>
    )
}

export default WooblyImage;