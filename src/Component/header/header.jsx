import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movie/movieslice';
import image from '../header/images/Load.gif';

const Header = () => {
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const searchDebounced = debounce((term) => {
    setLoading(true);
    dispatch(fetchAsyncMovies(term))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
    dispatch(fetchAsyncShows(term))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, 500);

  const submithandler = (e) => {
    e.preventDefault();
    searchDebounced(term);
    setTerm('');
  };

  return (
    <div className='header'>
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      {!location.pathname.includes('/movie/') && (
        <div className="search-bar">
          {loading && <div className="loading"><img style={{ width: "50px", height: "50px" }} src={image} alt="...Loading" /></div>}
          {error && <div className="error">{error}</div>}
          <form onSubmit={submithandler}>
            <input
              type="text"
              value={term}
              placeholder="search movie Name"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type='submit'><i className='fa fa-search'></i></button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;