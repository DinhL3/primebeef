import React from 'react';
import { useHistory } from "react-router-dom";

const Movie = (props) => {

    let history = useHistory()

    const movieSelect = () => {
        history.push(`/movies/${props.id}`);
    }

    return (
        <div className="movie" onClick={() => movieSelect()}>
            <img src={`https://image.tmdb.org/t/p/original/${props.img}`} />
        </div>
    );
};

export default Movie;