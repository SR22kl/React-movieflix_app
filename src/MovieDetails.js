import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './context';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const { id } = useParams();

  const [isLoading, setisLoading] = useState(true);
  const [movie, setMovie] = useState("")

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setisLoading(false);
        setMovie(data);
      } 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);

    }, 500);

    return () => clearTimeout(timeOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className='movie-section'>
        <div className='loading'>Loading...</div>
      </div>
    )
  }


  return (
    <>
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className=""></p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating} / 10</p>
            <p className="card-text">{movie.Country}</p>
            <NavLink to="/" style={{height:"0px", paddingTop: '10px'}}><p style={{color:"white"}}>Go Back</p></NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;