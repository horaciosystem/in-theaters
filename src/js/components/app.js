import React, { Component } from 'react';
import '../../css/app.css';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import MovieList from './movie-list';
import movieStore from '../stores/movie-store';

export default class App extends Component {
  
  render() {
    return (
      <div className="main-container">
        <Header className="header"><h1>Movies in Theaters</h1></Header> 
        <div className="app-container">        
          <Content>
            <MovieList movieStore={movieStore} />
          </Content>
          <Footer>Footer</Footer>
        </div>
      </div>
    )
  }
}