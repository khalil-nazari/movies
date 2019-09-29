/**
 * ReactJS App Developed 
 * On : @ 29/09/2019
 * By : Khalil 
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Style.css';
import MovieImage from './MovieImage.js';

class MovieRows extends Component {
    /** Check if data is available */

    state = {
        rows: [],
        detailURL: ''
    }

    componentDidMount() {
        this.setState({
            rows: this.props.movieRows, 
        })
    }

    render(){
        const movieRow = this.state.rows; 
        let mRows = "";
        if(movieRow !== undefined && movieRow !== null) {
            mRows = movieRow.map( movieTitle => {
                let title = ''; 
                let $mImages;

                /** check if tile is available */
                if( movieTitle.title !== undefined && movieTitle.title !== null ) {
                    title = movieTitle.title; 
                } else {
                    title = "Movie title is unavailable";    
                }

                // Check if image object is available 
                if(movieTitle.images !== undefined && movieTitle.images !== null) {
                    $mImages = movieTitle.images;
                } else {
                    // Check if image object and row_name is null/undefined. 
                    if(title === "Movie title is unavailable" && movieTitle.images !== undefined ){
                        return;
                    }
                }

                return (
                    <div key={ movieTitle.id }>
                        <div>
                            <div className="col-sm-12 col-md-6 col-lg-4 scrollColumn">
                                <Link to={'/'+ movieTitle.id }><MovieImage movieImages={ $mImages }/></Link>
                                <span>{ title }</span>
                            </div>
                        </div>
                    </div>
                )  

            }) 
        }

        return (
            <div className="row scrollRow flex-nowrap">{ mRows }</div>
        )
    }
}

/** Export component */
export default MovieRows