import React, { Component } from 'react';
import MovieItem from './movie-item';
import { observer } from 'mobx-react';

@observer
export default class MovieList extends Component {
  
  render() {
    return(
      <div className="movies-container">    
        {this.buildItems()}
      </div>
    );
  }

  componentDidMount() {
    this.props.movieStore.fetchMovies();
  }

  buildItems = () => {
    return this.props.movieStore.movies.map(movie =>
      <MovieItem 
        key={`movie-item-${movie.id}`}
        movie={movie}
      />
    )
  }
}