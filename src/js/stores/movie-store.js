import  {observable, computed, action, autorun} from 'mobx';
import fetch from 'isomorphic-fetch';


class MovieStore {  
  @observable movies = null;  
  @observable isLoading = true;
  @observable watchListSelected = false;
  
  @action.bound
  fetchMovies() {    
    console.warn('fetching ?');
    return fetch('/movies')
      .then(response => response.json())
      .then(moviesJson => {
        this.movies = JSON.parse(moviesJson)
        this.isLoading = false;
        console.warn('loading', this.isLoading);
      })
      .catch(e => console.log(e));
  }

  // @computed get watchList() {
  //   return this.movies.filter(movie => movie.watchLater);
  // }

  // @action.bound
  // selectWatchList() {    
  //   this.watchListSelected = true;
  // }

  @action.bound
  addToWatchList(movie) {
    //TODO testing
    this.movies.results = this.movies.results.filter(item => item.id !== movie.id);
  }

    
}
const movieStore = new MovieStore();
export default movieStore;