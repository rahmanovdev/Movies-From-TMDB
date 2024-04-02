import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { APIKEY } from './ApiKey';
import MoviesCard from './page/MoviesCard';
import { LanguageContext } from '../context';

const TopRated = () => {

    const [topRated , setTopRated] = useState([])

  const {language} = useContext(LanguageContext)

  

    const getTopRated = async () => {
        const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${language}&page=1`)
        const {results} = await response.data
        setTopRated(results)
    } 

    useEffect(()=> {
        getTopRated()
    },[language])

    return (
        <div id='movies'>
            <div className='container'>
                <div className='movies'>
                    {
                        topRated.map((el)=> <MoviesCard el={el}/>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default TopRated;