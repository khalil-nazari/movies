/**
 * ReactJS App Developed 
 * On : @ 29/09/2019
 * By : Khalil 
 */

import React, { Component } from 'react'; 
import axios from 'axios'; 

import Paginations from "react-pagination-library";
import "react-pagination-library/build/css/index.css";

import './Style.css';
import MovieRows from './MovieRows.js'; 

class MoviesList extends Component {
    state = {
        currentPage: 1, 
        movies: [], 
        total_pages: 0,
        per_page : 0
    }

    // Grabing data form the link provided.
    changeCurrentPage = numPage => {
        this.setState({
            currentPage: numPage
        })

        // axios gets data and update the state.
        const allData = () => axios.get('https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page='+ this.state.currentPage +'&perPage=20')
        .then(res => {
            this.setState({
                movies: res.data.data, 
            })
        }); 
        
        allData();
    };


    // after components mounted update the current page data.
    componentDidMount(){
        this.changeCurrentPage() 
    }

    render () {
        const allMovies = this.state.movies;
        
        // Get rows
        let row_name ='';
        if(allMovies !== null && allMovies !== undefined) {

            // Maping data for JSX
            const movieListRow = allMovies.map(movie => {
                row_name ='';

                // Check for valid row name
                if(movie.row_name !== null && movie.row_name !== undefined ) {
                    row_name = movie.row_name;
                } else {
                    row_name = "Row name is not available";
                }

                // Check for valid data
                if(movie.data === null || typeof movie.data === 'undefined') {
                    if(row_name === "Row name is not available") {
                        return '';
                    }
                } 

                return (
                    <div className="datarow mt-4" key={ movie.row_id }>
                        <h2 className="text-muted">Row Not Available</h2>
                        <hr/>
                        <MovieRows movieRows={ movie.data }/>
                        <br/><br/>
                    </div> 
                )
            }) 

            return (
                <div className="container-fluid">
                    <div className="container testimonial-group">
                        { movieListRow }
                        <Paginations 
                            currentPage={this.state.currentPage}
                            totalPages={2}
                            changeCurrentPage={this.changeCurrentPage}
                        />
                    </div>
                </div>
            )
        }
    }
}

export default MoviesList