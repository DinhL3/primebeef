import React from 'react';
import { useHistory } from "react-router-dom";
import Moment from "react-moment"


const ResultCard = (props) => {

    let history = useHistory()

    const movieSelect = () => {
        history.push(`/movies/${props.id}`);
    }

    return (
        <div className="result-card" onClick={() => movieSelect()}>
            <img src={`https://image.tmdb.org/t/p/original/${props.img}`} />
            <div className="result-card-right">
                <h3>{props.title}</h3>
                <p>IMDb {props.rating}</p>
                <p><Moment format="YYYY">{props.date}</Moment></p>

            </div>
        </div >
    );
};

export default ResultCard;