import  {observable, computed, reaction, autorun} from 'mobx';
import fetch from 'isomorphic-fetch';


class MovieStore {
  @observable movies = null;

  fetchMovies() {    
    return fetch('/movies')
      .then(response => response.json())
      .then(moviesJson => this.movies = JSON.parse(moviesJson))
      .catch(e => console.log(e));
  }
    
}
const movieStore = new MovieStore();
export default movieStore;