import React, { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper";
import 'swiper/swiper-bundle.css';


import axios from "axios"
import MovieList from "../components/MovieList"

const API_KEY = process.env.REACT_APP_API_KEY



const Homepage = () => {
    const [moviesPopular, setMoviesPopular] = useState([])

    const getMovies = async () => {
        try {
            let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

            const res = await axios.get(url)
            console.log(res.data.results)
            setMoviesPopular(res.data.results)
        }

        catch (err) {
            console.log("Error fetching data")
        }
    }

    useEffect(() => {
        getMovies()

    }, [])

    return (
        <div>
            <h2 className="slider-heading">Popular movies</h2>
            <MovieList movies={moviesPopular} />


        </div>


    )
}

export default Homepage