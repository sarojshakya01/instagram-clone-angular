import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchResponse } from '../modules/Search';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl: string = 'http://localhost:3001/api/search/user/';

  constructor(private http: HttpClient) { }

  // Get search suggestion
  getSearchSuggestions(query: string): Observable<SearchResponse[]> {
    return this.http.get<SearchResponse[]>(`${this.apiUrl}?q=${query}`);
  }
}
