import  {observable, computed, action, autorun} from 'mobx';
import fetch from 'isomorphic-fetch';
import MovieItemStore from './movie-item-store';

class MovieStore {  
  @observable movies = [];  
  @observable isLoading = true;
  @observable watchList = false;
  
  @action.bound
  fetchMovies() {    
    console.warn('fetching ?');
    return fetch('/movies')
      .then(response => response.json())
      .then(moviesJson => {
        const movies = JSON.parse(moviesJson);
        this.movies = movies.results.map(this.addItem);
        this.isLoading = false;
        console.warn('loading', this.isLoading);
      })
      .catch(e => console.log(e));
  }

  addItem = (movie) => {
    const item = new MovieItemStore();
    item.id = movie.id;
    item.title = movie.title;
    item.vote_average = movie.vote_average;
    item.release_date = movie.release_date;   
    item.poster_path = movie.poster_path;
    return item;
  }

  @computed get watchListCount() {        
    return this.movies ? this.movies.filter(movie => movie.watchLater).length : 0;
  }

  @action.bound
  toogleWatchList() {
    this.watchList = !this.watchList;
  }
  
  @computed get listWatchLatter() {    
    return this.movies.filter(movie => movie.watchLater);
  }


}

const movieStore = new MovieStore();
export default movieStore;