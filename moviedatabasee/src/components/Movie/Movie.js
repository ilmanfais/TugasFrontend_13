import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

function Movie(props) {
  const { title, date, Image, genre, id } = props;
  const url_image = `https://image.tmdb.org/t/p/w300/${Image}`
  return (
    <MovieStyle>
      <img className="movie__image" src={url_image} alt="" />
      <Link to={`/movie/${id}`}>
        <h3 className="movie__title">{title}</h3>
      </Link>
      <p className="movie__genre">{genre}</p>
      <p className="movie__date">{date}</p>
    </MovieStyle>
  );
}

const MovieStyle = styled.div`
  margin-bottom: 1rem;

    
.movie__image {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
}

.movie__title {
    color: #fff;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
}

.movie__genre {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}


.movie__date {
    color: #fff;
    font-size: 1.2rem;
}

@media (min-width: 768px) {
        flex-basis: 50%;
}

@media (min-width: 992px) {
        flex-basis: 25%;
        padding: 1rem;
}
`

export default Movie;
