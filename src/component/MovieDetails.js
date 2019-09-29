/**
 * ReactJS App Developed 
 * On : @ 29/09/2019
 * By : Khalil 
 */
import React, { Component } from 'react'; 
import axios from 'axios';
const posterStyle = {
    'boxShadow': '5px 5px 15px 5px lightgrey'
}
class MovieDetails extends Component {
    state = {
        movieDetail: [], 
        moviePoster: '',
    }

    componentDidMount() {
        let id = this.props.match.params.id; 
        axios.get('https://cdn-discover.hooq.tv/v1.2/discover/titles/' + id)
            .then(res => {
                this.setState({
                    movieDetail: res.data.data,
                })
            })
    }

    // Render 
    render () {
        const movie_detail = this.state.movieDetail; 
        
        if(movie_detail !== null && movie_detail !== undefined) {
            let posterURL = "";
            if(movie_detail.images !== null && typeof movie_detail.images !== 'undefined' ){

                // Check for poster type image.
                posterURL = movie_detail.images.map( res => {
                    let mUrl = "";
                    if(res.url.includes('POSTER')){
                        mUrl = res.url;
                    }
                    return mUrl;
                })
            } 

            let featureIn = "";
            if(movie_detail.people !== null && movie_detail.people !== undefined ){
                featureIn = movie_detail.people.map(res => {
                    return (
                        <span className="badge badge-info ml-1" key={res.name}> {res.name}</span>
                    )
                })
            } 

            let tags = "";
            if(movie_detail.tags !== null && movie_detail.tags !== undefined ){
                tags = movie_detail.tags.map(res => {
                    return (
                        <span className="badge ml-1" key={res.tag}><strong>#{res.tag}</strong></span>
                    )
                })
            }
            
            if(tags !== "" && featureIn !== "" && posterURL !== "")  {

            return (
                <div className="container-fluid  mt-1  py-4">
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-3 ">
                                <img style={posterStyle} src={posterURL} alt="movie poster"/>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <div>
                                    <h2>{ movie_detail.title }</h2>
                                    <span className="h5 text-muted">{movie_detail.as}</span>
                                    <hr/>
                                    <p>{movie_detail.description}</p>
                                    <div><span className="h5">Featured:</span> {featureIn}</div>

                                    <div className="mt-3"> <span className="h5">Tags:</span>  {tags}</div>
                                    <br/>

                                    <div><p> <span className="h5">Seasons:</span> { movie_detail.title } has {movie_detail.seasons} season(s).</p> </div>
                                    <br/>
                                    {/* <div className="mt-3"><p> <span className="h4">Released Year:</span>{movie_detail.meta.releaseYear}</p> </div> */}
                                </div>
                                
                                
                            </div>
                        </div>
                       
                    </div>
                
                </div>
            )
            } else {
                return (
                    <div className="container-fluid  mt-1  py-4">
                        <div className="container py-3">
                            <h3>Sorry, No detail is avialable.</h3>  
                        </div>
                    </div>
                )
            } 
        } 
    }
}

export default MovieDetails