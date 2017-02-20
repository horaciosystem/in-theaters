import React, { Component } from 'react';
import '../../css/app.css';
import { Layout, Badge } from 'antd';
const { Header, Footer, Content } = Layout;
import MovieList from './movie-list';
import { observer } from 'mobx-react';

@observer
export default class App extends Component {
  
  inTheatersHandle = () => {
    console.warn('//Todo')
  }

  watchListHandle = () => {
    console.warn('//Todo')
  }

  componentDidMount() {
    this.props.movieStore.fetchMovies();
  }  

  render() {
    return (
      <div className="main-container">
        <Header className="header">
          <div>
            <h1>Movies</h1>
          </div>
          <div>
            <a onClick={this.inTheatersHandle}>In theaters</a>
          </div>
          <div>
            <a onClick={this.watchListHandle}>Watchlist 
              <Badge count={this.props.movieStore.watchListCount} style={{ backgroundColor: '#87d068'}} />
            </a>            
          </div>
        </Header> 
        <div className="app-container">        
          <Content>
            {this.props.movieStore.isLoading ? (
              <div>Loading...</div>
            ) : (
              <MovieList movieStore={this.props.movieStore} />
            )}
          </Content>
          <Footer>Footer</Footer>
        </div>
      </div>
    )
  }
}