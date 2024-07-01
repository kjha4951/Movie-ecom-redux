import React, { useEffect } from 'react'
import './home.scss';
import Movielisting from '../movielisting/movielisting.jsx'

import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShows, getAllshowsDetails } from '../../features/movie/movieslice.js';
// import axios from 'axios';





const Home = () => {
  

  const dispatch = useDispatch();

  const movietext="Harry";
  const shows = "Friends";
  
useEffect(() => {
    dispatch(fetchAsyncMovies(movietext));
    dispatch(fetchAsyncShows(shows))


  },[dispatch]);


 return (
    <div>
      <div className='banner-img'></div>
      
      <Movielisting />
    </div>
  )
}

export default Home