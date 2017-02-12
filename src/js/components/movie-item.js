import React, { Component } from 'react';
import {observer} from 'mobx-react';
import { Card } from 'antd';

@observer
export default class MovieList extends Component {
  state = {isDetailOpen: false};

  toogleDetails = () => {
    console.warn('teste');
    this.setState((prevState, prevProps) => {
      return {
        isDetailOpen: !prevState.isDetailOpen
      };
    });
  }

  render() {
    const movie = this.props.movie;
    return (
      <div className="movie-item">
        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }} onClick={this.toogleDetails}>
          <div className="custom-image">
            <img width="100%" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
          </div>
          <div className="custom-card">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>        
        </Card>
        {this.state.isDetailOpen &&         
          <div className="detail-panel">
            <p>{movie.release_date}</p>

            <p>{movie.release_date}</p>

            <p>{movie.release_date}</p>
            <p>{movie.release_date}</p>

            <p>{movie.release_date}</p>

            <p>{movie.release_date}</p>
            <p>{movie.release_date}</p>
          </div>
          }
      </div>
    );
  }

}
