import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";



import axios from "axios"
import MovieList from "../components/MovieList"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const API_KEY = process.env.REACT_APP_API_KEY



const Homepage = (props) => {
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

    let history = useHistory()

    // const movieSelect = () => {
    //     history.push(`/movies/${props.id}`);
    // }

    return (
        <div>
            <Swiper
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,

                }}
                className="hero-slider">

                {moviesPopular.slice(0, 7).map((item) => (
                    <SwiperSlide>

                        <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                            onClick={() => {
                                history.push(`/movies/${item.id}`)
                            }} />
                    </SwiperSlide>))}
            </Swiper>
            <h2 className="slider-heading">Popular movies</h2>
            <MovieList movies={moviesPopular} />
        </div >


    )
}

export default Homepage