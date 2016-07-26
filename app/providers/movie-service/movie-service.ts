import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private http: Http) {
    
  }
  
  searchMovies(movieName) {
    var url="https://api.themoviedb.org/3/search/movie?query=&query=" + encodeURI(movieName) + "api_key=7b5e30851a9285340e78c201c4e4ab99"
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}

