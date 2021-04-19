import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios"

import ResultCard from '../components/ResultCard';

const API_KEY = process.env.REACT_APP_API_KEY

const Search = () => {
    const { query } = useParams()
    const [searchRes, setSearchRes] = useState([])

    const getMovies = async () => {
        try {
            let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}${query}`

            const res = await axios.get(url)
            console.log(res.data.results)
            setSearchRes(res.data.results)
        }

        catch (err) {
            console.log("Error fetching data")
        }
    }

    useEffect(() => {
        getMovies()

    }, [])

    return (
        <div >
            <div className="search-res-header">
                <h3>search results for "{query.substr(7)}"</h3>
                <hr />
            </div>
            <div className="search-res-container">
                {searchRes.map((item) => (
                    <ResultCard
                        id={item.id}
                        title={item.original_title}
                        img={item.poster_path}
                        date={item.release_date}
                        rating={item.vote_average}

                    />
                ))}
            </div>
        </div>
    )
}

export default Search;