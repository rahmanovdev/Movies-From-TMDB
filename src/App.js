import './App.css';
import Recipes from './components/Data/Recipes';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Popular from './components/Popular';
import TopRated from './components/TopRated';

import { BrowserRouter } from 'react-router-dom';
import DetailPage from './components/page/DetailPage';
import ActorDetail from './components/Actors/ActorDetail';
import { useContext, useState } from 'react';
import { LanguageContext } from './context';
import SearchResult from './SearchResult/SearchResult';



function App() {

  const {mode, setMode} = useContext(LanguageContext)

  return (
    <div style={{
      background: mode ? 'black' : "",
      color: mode ? 'white' : ''
    }}>
      <Header/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/toprated" element={<TopRated/>}/>
      <Route path="/movies/detail-page/:movieId" element={<DetailPage/>}/>
      <Route path="/actor/detail-page/:actorId" element={<ActorDetail/>}/>
      <Route path="/movies/search-result/:movieName" element={<SearchResult/>}/>
    </Routes>

   
    </div>
  )
};

export default App;
