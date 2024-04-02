import React from 'react';
import { Link } from 'react-router-dom';

const MoviesCard = ({el}) => {
    return (
        <div className='movies-card'>
        <Link to={`/movies/detail-page/${el.id}`}>
        <img
         src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`}
          alt='img' />
        </Link>
        <div className='movies-info'>
        <h4>{el.title}</h4>
        <h5>{el.vote_average}</h5>
        </div>
        </div>
    );
};

export default MoviesCard;