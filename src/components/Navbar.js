import React from "react"
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="navbar" >
            <div className="navbar-left">
                <Link className="logo" to="/"><span class="material-icons">slideshow</span> prime beef</Link>
                <Link className="nav-link" to="">Home</Link>
                <Link className="nav-link" to="">TV Shows</Link>
                <Link className="nav-link" to="">Movies</Link>
                <Link className="nav-link" to="">Kids</Link>
            </div>
            <form className="navbar-right">
                <button className="btn search-btn"><span class="material-icons">search</span></button>
                <input className="search-bar" type="text" placeholder="Search"></input>
            </form>
        </div >
    )
}

export default Navbar