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

  buildItems = () => {
    return this.props.movieStore.movies.results.map(movie =>
      <MovieItem 
        key={`movie-item-${movie.id}`}
        movie={movie}
      />
    )
  }
}