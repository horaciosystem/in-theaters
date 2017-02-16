import React, { Component } from 'react';
import {observer} from 'mobx-react';
import { Card } from 'antd';

@observer
export default class MovieItem extends Component {

  componentDidMount() {
    this.props.movieStore.fetchMovies();
  }

  render() {
    const { movie, movieSelected } = this.props;    
    return (
      <div className="movie-item">
        <div className="image-content">
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
        </div>
        <div className="movie-detail">
          <h3>{movie.title}</h3>            
          <p>{movie.vote_average}</p>
          <p>{movie.release_date}</p>
          <p className="genres">Generos</p>
          <p className="overview">{movie.overview}</p>
        </div>                
      </div>
    );
  }

}
