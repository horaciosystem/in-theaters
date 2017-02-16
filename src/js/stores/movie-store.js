import  {observable, computed, reaction, autorun} from 'mobx';
import fetch from 'isomorphic-fetch';


class MovieStore {
  @observable movies = null;
  @observable movieSelected = null;

  fetchMovies() {    
    return fetch('/movies')
      .then(response => response.json())
      .then(moviesJson => this.movies = JSON.parse(moviesJson))
      .catch(e => console.log(e));
  }

  setSelectedMovie(movie) {
    this.movieSelected = movie;
  }
    
}
const movieStore = new MovieStore();
export default movieStore;