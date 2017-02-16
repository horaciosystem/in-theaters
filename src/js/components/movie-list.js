import React, { Component } from 'react';
import MovieItem from './movie-item';
import { observer } from 'mobx-react';

@observer
export default class MovieList extends Component {  
  
  render() {
    const movieStore = this.props.movieStore;
    console.log('render list...', movieStore.movies);
    if (movieStore.movies) {
      return(
        <div className="movies-container">    
          {this.buildItems()}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }

  componentDidMount() {
    this.props.movieStore.fetchMovies();
  }

  movieSelected = (movie) => {
    const movieStore = this.props.movieStore;
    if (movieStore.movieSelected && movieStore.movieSelected.id) {
      return movieStore.movieSelected.id === movie.id
    } else 
      return false;
  }

  onSelectMovie = (movie) => {
    const movieStore = this.props.movieStore;
    if (movieStore.movieSelected && movieStore.movieSelected.id === movie.id)
      this.props.movieStore.setSelectedMovie(null);
    else 
      this.props.movieStore.setSelectedMovie(movie);

  }

  buildItems = () => {
    return this.props.movieStore.movies.results.map(movie =>
      <MovieItem 
        key={`movie-item-${movie.id}`}
        movie={movie}
        movieSelected={this.movieSelected(movie)}
        onSelectMovie={this.onSelectMovie}
      />
    )
  }
}