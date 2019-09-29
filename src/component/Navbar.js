import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = (props) => {
        return (
            <div className="container-fluid bg-dark py-3">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark text-white">
                        <h2>Movies</h2>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ml-4" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link" to="/">All Movies</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
}

export default Navbar