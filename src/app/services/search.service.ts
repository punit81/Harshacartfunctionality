import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//@Injectable({
 // providedIn: 'root'
//})

@Injectable()
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getRepos(query: string){
   const url = `https://api.github.com/search/repositories?q=${query}`;
   return this.httpClient.get(url); 
  }
}
