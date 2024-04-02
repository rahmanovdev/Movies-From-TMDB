import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { APIKEY } from '../ApiKey';
import Slider from "react-slick";
import person from '../../img/person-icon-png-10.jpg'
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context';

const Actors = ({movieId}) => {

    const [actors,setActors] = useState([])

    const  {language} = useContext(LanguageContext)

    const getActors = async (id,apikey)=> {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}&language=${language}`)
        const {data} = url
        setActors(data.cast)
    }

    // console.log(actors);

    useEffect(()=> {
        getActors(movieId,APIKEY)
    },[language])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
      };

    return (
        <div id='actors'>
            <div className='container'>
                <Slider {...settings}> 
                {
                 actors.map(el=> (
                    <Link to={`/actor/detail-page/${el.id}`}>
                     <div>
                       {
                        el.profile_path ? <img src={`https://media.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt='img'/>
                         : 
                         <img width={170} src={person} alt='img'/>
                       }
                         <h4>{el.name}</h4>
                    </div>
                    </Link>
                   
                ))}
                </Slider>
              
            </div>
        </div>
    );
};

export default Actors;

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US