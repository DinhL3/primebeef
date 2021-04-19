import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";




const Navbar = () => {
    const [keyword, setKeyword] = useState("");

    let history = useHistory()
    const QUERYSTR_PREFIX = "&query="

    const handleSearch = () => {
        history.push(`/search/movie/${QUERYSTR_PREFIX}${keyword}`)
    }

    return (
        <div className="navbar" >
            <div className="navbar-left">
                <Link className="logo" to="/"><span class="material-icons">slideshow</span> prime beef</Link>
                <Link className="nav-link" to="">Movies</Link>
                <Link className="nav-link" to="">TV Shows</Link>
                <Link className="nav-link" to="">Kids</Link>
            </div>
            <div className="navbar-right">
                <form className="search-form" onSubmit={handleSearch}>
                    <button className="btn search-btn" onClick={() => handleSearch()}><span class="material-icons">search</span></button>
                    <input className="search-bar" type="text" placeholder="Search" onChange={(e) => setKeyword(e.target.value)}></input>
                </form>

                <Link className="nav-link user-name" to=""><span class="material-icons">account_circle</span>Dinh</Link>
            </div>
        </div >
    )
}

export default Navbar