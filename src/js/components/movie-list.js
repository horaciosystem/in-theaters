import React, { Component } from 'react';
import MovieItem from './movie-item';
import movieItemStore from '../stores/movie-item-store';

export default class MovieList extends Component {  

  render() {
    const movies = this.props.movieStore.movies;
    console.log('render list...',  this.props.movieStore.movies);    
    return ( 
      <div>     
        {movies.length > 0 ? (
          <div className="movies-container">    
            {this.buildItems(movies)}
          </div>
        ) : (
          <div>Sem items.</div> 
        )}
      </div>
    );
  }

  buildItems = (movies) => {    
    return movies.map(movie =>
      <MovieItem 
        key={`movie-item-${movie.id}`}
        movie={movie}
      />
    )
  }
}