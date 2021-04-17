import React from 'react';

import Movie from './Movie';

const MovieList = (props) => {
    return (
        <div className="movie-list">
            {props.movies.map((item) => (
                <Movie
                    id={item.id}
                    title={item.original_title}
                    img={item.poster_path}

                />
            ))}
        </div>
    );
};

export default MovieList;