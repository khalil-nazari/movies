/**
 * ReactJS App Developed 
 * On : @ 29/09/2019
 * By : Khalil 
 */

import React from 'react';
import './Style.css';
import no_image from './no_image.jpg'


const MovieImages = ({ movieImages }) => {
    const imgStyle={
        width: '300px', 
        hieght: '600px'
     }

    if (movieImages !== null && movieImages !== undefined ) {
        // Map data
        const movie_images = movieImages.map( images => {
            // Check URL
            let imgUrl = ""; 
            if(images.url !== null && images.url !== undefined) {
                if(images.url.includes('POSTER')){
                    imgUrl = images.url;
                } else {
                    return;
                }
            } else {
                imgUrl = no_image; 
            }

            return (
                <div key={ images.id }>
                    <img src={ imgUrl } style={ imgStyle }  alt="Movie poster" />
                </div>
            )
        });

        return (
            <div> { movie_images } </div>
        )
    } else{
        return (
            <div>
                <img src={ no_image } style={ imgStyle }  alt="Movie poster" />
            </div>
           
        )
    }

    return (
        <div></div>
    )
}

export default MovieImages