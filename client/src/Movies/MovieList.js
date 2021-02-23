import React from 'react';
import { useHistory, useParams} from 'react-router-dom'

export default function MovieList(props) {

  const {movies} = props
  const {id} = useParams()
  const history = useHistory()

  const routeToMovie = () => {
    history.push(`/movies/${id}`)
    console.log(history)
  }
  return (
    <div onClick={routeToMovie} className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </div>
  );
}
