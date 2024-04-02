import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIKEY } from '../ApiKey';
import Actors from '../Actors/Actors';
import Video from '../Video/Video';
import { LanguageContext } from '../../context';


const DetailPage = () => {

const [detail,setDetail] = useState({})

const {movieId} = useParams()

const {language} = useContext(LanguageContext)

const getDetailPage = async (id,apikey)=> {
    try{
    const url = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=${language}`)
    const {data} = await url
    setDetail(data)
    }catch(e){
        console.log(e);
    }

    
}

// console.log(detail);

useEffect(()=> {
    getDetailPage(movieId,APIKEY)
},[language])

const {title,poster_path,overview,runtime} = detail



    return (
       <>
        <div style={{
            background: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}') no-repeat center/cover`,
            color: 'white'
        }} id='detail'>
            <div className='container'>
                    {
                       <div className='detail'> <img
                       style={{boxShadow: '0 10px 25px black'}}
                       width='300'
                        src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`} alt='img' />

                        <div className='detail-desc'>
                            <h1>${title}</h1>
                            <p>${overview}</p>
                            <h2>{Math.floor(runtime / 60)} h {runtime % 60} min</h2>
                            <div className='vote' style={{
                                background: `conic-gradient(yellow ${Math.round(detail.vote_average * 10) * 3.59}deg, gray 0deg)`
                            }}>
                                 <div className='detail-vote'>{Math.round(detail.vote_average * 10)}%</div>
                            </div>
                           
                        </div>
                        </div>
                    }
            </div>
            
        </div>
        <Actors movieId={movieId}/>
        <Video movieId={movieId}/>

       </>
    );
};

export default DetailPage;

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US