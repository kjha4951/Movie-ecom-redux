import React from 'react'
import { useSelector } from 'react-redux'
import { getAllmovies , getAllshows,  } from '../../features/movie/movieslice.js'
import Moviecard from '../moviecard/moviecard.jsx';
import "./movielisting.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Movielisting = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const movies = useSelector(getAllmovies);
  const shows = useSelector(getAllshows);
  
  let rendermovies,renderShows  = "";

  rendermovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <Moviecard key={index} data={movie} />
      ))
    ) : (
      <div className='movies-error'>
        <h3>{movies.Error}</h3>
      </div>
    );

   

    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <Moviecard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <>
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          
          <Slider {...settings} >
          {rendermovies}
          </Slider>
          </div>

      </div>
      <div className="shows-list">
        <h2>Shows</h2>
       
        <div className="movie-container">
        <Slider {...settings}>
          {renderShows}
          </Slider>
          </div>
      </div>
      </>
    </div>
  )
}

export default Movielisting

