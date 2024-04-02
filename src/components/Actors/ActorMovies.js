import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { APIKEY } from '../ApiKey';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context';


const ActorMovies = ({actorId}) => {

    const [movies,setMovies] = useState([])

    const {language} = useContext(LanguageContext)

    const getActorMovies = async (id,key)=> {
        const res = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`)
        setMovies(res.data.cast)
    }
    console.log(movies);
    useEffect(()=> {
        getActorMovies(actorId,APIKEY)
    },[language])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3
      };

    return (
        <div id='actor-movies'>
            <Slider {...settings}>
                 {
                movies.filter(el => el.poster_path).map(el => (
                    <div>
                        <Link to={`/movies/detail-page/${el.id}`}>
                        <img
                        width='110'
                         src={`https://media.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`} alt='img'/>
                        </Link>

                        
                        <h4>{el.title}</h4> 
                    </div>
                ))
            }
            </Slider>
           
        </div>
    );
};

export default ActorMovies;