import React, { Component } from 'react';
import MovieItem from './movie-item';

export default class MovieList extends Component {  

  render() {
    const movies = this.props.movieStore.movies;
    console.log('render list...',  this.props.movieStore.movies.results);    
    return ( 
      <div>     
        {movies.results.length > 0 ? (
          <div className="movies-container">    
            {this.buildItems(movies)}
          </div>
        ) : (
          <div>Sem items.</div> 
        )}
      </div>
    );
  }

  handleAddWatchlist = (movie) => {
    this.props.movieStore.addToWatchList(movie);
  }

  buildItems = (movies) => {    
    return movies.results.map(movie =>
      <MovieItem 
        key={`movie-item-${movie.id}`}
        movie={movie} 
        onAddWatchList={this.handleAddWatchlist}    
      />
    )
  }
}