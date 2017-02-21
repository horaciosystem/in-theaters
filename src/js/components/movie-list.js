import React, { Component } from 'react';
import MovieItem from './movie-item';
import movieItemStore from '../stores/movie-item-store';
import {observer} from 'mobx-react';

@observer
export default class MovieList extends Component {  

  render() {
    let {movies, watchList} = this.props.movieStore;
    if (watchList) {
      movies = this.props.movieStore.listWatchLatter;
    }
    console.log('render list...', movies);
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