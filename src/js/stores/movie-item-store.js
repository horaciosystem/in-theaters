import  {observable, computed, action, autorun} from 'mobx';

export default class MovieItemStore {
  id = 0;
  title = '';
  vote_average = 0;
  release_date =  null;
  poster_path = '';
  @observable watchLater = false;
}