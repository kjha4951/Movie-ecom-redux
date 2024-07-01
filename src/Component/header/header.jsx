import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './header.scss'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies ,fetchAsyncShows } from '../../features/movie/movieslice';


const Header = () => {
  const [term, settearm] = useState('');
const dispatch = useDispatch()
  const submithandler = (e)=>{
    e.preventDefault();
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    settearm("");

    // console.log(term);
  }


  return (
    <div className='header'>
       <Link to="/">
      <div className="logo">Movie App</div>
       </Link>
       <div className="search-bar">
        <form onSubmit={submithandler} >
          <input type="text" value={term} placeholder="search movie" onChange={(e)=>settearm(e.target.value)}/>
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
       </div>
   <div className="user-image">
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
   </div>
    </div>
  )
}

export default Header