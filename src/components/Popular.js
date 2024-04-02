import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { APIKEY } from './ApiKey';
import MoviesCard from './page/MoviesCard';
import { useContext } from 'react';
import { LanguageContext } from '../context';

const Popular = () => {
    const [popular,setPopular] = useState([])

    const [page, setPage] = useState(1)

    const {language} = useContext(LanguageContext)

const getPopular = async ()=> {
    const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${page}`)
    const {data} = await res
    window.scroll(0,0)
    setPopular(data.results)
}

console.log(popular);


const arrayPages = [1,2,3,4,5,6,7,8,9,10]

useEffect(()=> {
   getPopular()
},[language,page])



    return (
        <div id='movies'>
        <div className='container'>
            <div className='movies'>
                {
                    popular.map(el => (
                      <MoviesCard key={el.id} el={el}/> 
                ))}
            </div>
        </div>
            <div className='pagination-btn'>      
        {
            arrayPages.map(el => (
                <button 
                style={{
                    background: el===page ? 'red' : ''
                }}
                onClick={()=> setPage(el)}>{el}</button>
            ))
        }
            </div>
        </div>
    );
};

export default Popular;