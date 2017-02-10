import React, { Component } from 'react';
import {observer} from 'mobx-react';
import { Card } from 'antd';

@observer
export default class MovieList extends Component {
  
  render() {
    const movie = this.props.movie;    
    return (
      <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
      <div className="custom-image">
        <img alt="example" width="100%" src={movie.posters.thumbnail} />
      </div>
      <div className="custom-card">
        <h3>{movie.title}</h3>
        <p>{movie.year} </p>
      </div>
    </Card>
    );
  }

}
