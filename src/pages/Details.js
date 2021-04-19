import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios"
import Moment from "react-moment"

const API_KEY = process.env.REACT_APP_API_KEY


const Details = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null)
    const [cast, setCast] = useState(null)
    const [actors, setActors] = useState(null)
    const [directors, setDirectors] = useState(null)
    const [ytKey, setYtKey] = useState(null)




    const getMovie = async () => {
        try {
            let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
            let urlCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
            let urlVideos = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
            const res = await axios.get(url)
            const resCast = await axios.get(urlCast)
            const resVideos = await axios.get(urlVideos)
            setMovie(res.data)
            setCast(resCast.data.cast)
            setYtKey(resVideos.data.videos.results[0].key)
            setActors(resCast.data.cast.filter(person => person.known_for_department == 'Acting'))
            setDirectors(resCast.data.crew.filter(person => person.job == 'Director'))
        }

        catch (err) {
            console.log("Error fetching data")
        }

    }

    useEffect(() => {
        getMovie();
    }, []);

    if (movie === null || cast === null || actors === null || directors === null || ytKey === null) {
        return (
            <div>Loading...</div>
        )
    }



    return (
        <div className="container movie-details">
            <div className="movie-left">
                <h1>{movie.original_title}</h1>
                <div className="badges">
                    <span>IMDb {movie.vote_average} </span>
                    <span>{movie.runtime} min</span>
                    <span><Moment format="YYYY">
                        {movie.release_date}
                    </Moment></span>

                </div>
                <p>{movie.overview}</p>
                <dl>
                    <dt>Directors</dt>
                    <dd>{directors.map((item) => (item.name)).join(", ")}</dd>
                </dl>
                <dl>
                    <dt>Starring</dt>
                    <dd>{actors.slice(0, 3).map((item) => (item.name)).join(", ")}</dd>
                </dl>
                <dl>
                    <dt>Genres</dt>
                    <dd>{movie.genres.map((item) => (item.name)).join(", ")}</dd>
                </dl>
                <dl>
                    <dt>Language</dt>
                    <dd>{movie.spoken_languages.map((item) => (item.name)).join(", ")}</dd>
                </dl>
                <a href={`https://youtu.be/${ytKey}`} target="_blank"><button><span class="material-icons">play_arrow</span>Play Trailer</button></a>
                <p>By clicking play, you agree to our <a href="https://www.primevideo.com/help/ref=atv_dp_terms?_encoding=UTF8&nodeId=202095490">Terms of Use.</a></p>
            </div >
            <div className="movie-right">
                <div className="overlay1"></div>
                <div className="overlay2"></div>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />

            </div>
        </div >
    )
}



export default Details