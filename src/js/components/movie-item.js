import React, { Component } from 'react';
import {observer} from 'mobx-react';
import { Card } from 'antd';

@observer
export default class MovieList extends Component {
  
  render() {
    const movie = this.props.movie;
    console.log('movie', movie);
    return (
      <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
      <div className="custom-image">
        <img alt="example" width="100%" src={movie.poster_path} />
      </div>
      <div className="custom-card">
        <h3>{movie.title}</h3>
        <p>{movie.release_date} </p>
      </div>
    </Card>
    );
  }

}
