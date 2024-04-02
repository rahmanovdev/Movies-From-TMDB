import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIKEY } from '../ApiKey';
import ActorMovies from './ActorMovies';
import { LanguageContext } from '../../context';

const ActorDetail = () => {

    const [actorDetail,setActorDetail] = useState({})

    const {language} = useContext(LanguageContext)

    const getActorDetail = async (id,key) => {
        const res = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=${language}`)
        setActorDetail(res.data)
    }

    const {actorId} = useParams()

    console.log(actorDetail);

    useEffect(()=> {
        getActorDetail(actorId,APIKEY)
    },[language])

    const {name,birthday,biography} = actorDetail

    const [view,setView] = useState(300);

    const printText = (text) => {
        if(view === 300){
            setView(text.length)
        }else {
            setView(300)
        }
    }


    return (
        <div id='actor-detail'>
            <div className='container'>
                <div className='actor-detail'>
                <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${actorDetail.profile_path}`} alt='img'/>
                <div className='actor-detail-desc'>
                    <h2>{name}</h2>
                    <h3>{birthday}</h3>
                    <h3>Биография:</h3>
                    <p>{biography && biography.slice(0,view)}</p>
                   {
                    biography && biography.length > 300 &&  <span onClick={()=> printText(biography)} className='view-more'>{view === 300 ? 'view more' : 'close'}</span>
                   }
                </div>
                </div>
            </div>
            <ActorMovies actorId={actorId}/>

        </div>
    );
};

export default ActorDetail;