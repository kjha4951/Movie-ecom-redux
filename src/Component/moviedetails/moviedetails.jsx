import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllshowsDetails, removeAsyncShowsMoviesDetails } from '../../features/movie/movieslice';
import { fetchAsyncShowsMoviesDetails } from '../../features/movie/movieslice';
import './moviedetails.scss';


const Moviedetails = () => {
  const dispatch = useDispatch();
  const data = useSelector(getAllshowsDetails);
  console.log(data);
  const { imdbID } = useParams();

  useEffect(() => {
    dispatch(fetchAsyncShowsMoviesDetails(imdbID));
    return () => {
      dispatch(removeAsyncShowsMoviesDetails());
    };

  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      
        {Object.keys(data).length === 0?
      (<div ><p>..... Loading</p></div>) :(
    
      <>
    
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i> : {data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i> : {data.Year}
          </span>
          <span>
            Genre <i className="fa fa-tags"></i> : {data.Genre}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Star</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Gener</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
        <div className="movie-button">
          <a href={`https://www.imdb.com/title/${imdbID}/`}>
            <button>View on IMDB</button>
          </a>
        </div>
      </div>
      
      </>
      )};
    </div>
  );
};

export default Moviedetails;
