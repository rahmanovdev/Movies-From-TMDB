import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { APIKEY } from '../components/ApiKey';
import { useParams } from 'react-router-dom';
import MoviesCard from '../components/page/MoviesCard';

const SearchResult = () => {

 const [result,setResult] = useState([]);

const getSearchResult = async (key,name) => {
    const response = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}&language=en-US&page=${page}`
    );
    setResult(response.data.results)
    setTotalPage(response.data.total_pages)
    window.scroll(0,0)

};


const [page,setPage] = useState(1)

const [totalPage, setTotalPage] = useState(0)

const {movieName} = useParams()

useEffect(()=> {
    getSearchResult(APIKEY,movieName)
},[movieName,page])

useEffect(() => {
    setPage(1)
},[movieName])

const array = []

for(let i = 1 ; i < totalPage ; i++){
    array.push(i)
}

    return (
        <div id='movies'>
            <div className='container'>
                <div className='movies'>
                {
                    result.map(el => <MoviesCard el={el} key={el.id}/>)
                }
                </div>

                <div className='page-movies'>
                    <button style={{
                        visibility: page === 1 ? 'hidden' : 'visible'
                    }} onClick={() => setPage(page - 1)}>prev</button>

                   {
                    array.map(el => (
                        <button
                        onClick={()=> setPage(el)}
                        style={{
                            background: el=== page ? 'red' : ''
                            
                        }}
                        >{el}</button>
                    ))
                   }

                    <button style={{
                        visibility: page === totalPage ? "hidden" : 'visible'
                    }} onClick={() => setPage(page + 1)}>next</button>

                    

                </div>

            </div>
            
        </div>
    );
};

export default SearchResult;

// https://api.themoviedb.org/3/search/movie?api_key={apikey}&query=Jack+Reacher