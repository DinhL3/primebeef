import React from 'react';

import Movie from './Movie';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const MovieList = (props) => {


    return (


        <div className="movie-list">
            <Swiper spaceBetween={0}
                // slidesPerView={10}
                navigation
                freeMode={true}
                breakpoints={{

                    320: {
                        width: 320,
                        slidesPerView: 2,
                    },




                    640: {
                        width: 640,
                        slidesPerView: 3,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 4,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 6,
                    },
                    1600: {
                        width: 1600,
                        slidesPerView: 9,
                    }
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>

                {props.movies.map((item) => (<SwiperSlide>
                    <Movie
                        id={item.id}
                        title={item.original_title}
                        img={item.poster_path}

                    /></SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default MovieList;