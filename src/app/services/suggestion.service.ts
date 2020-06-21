import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SuggestionResponse } from '../modules/Suggestion';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  private apiUrl: string = 'http://localhost:3001/suggestion';

  constructor(private http: HttpClient) {}

  // Get suggestions
  getSuggestions(userId: string): Observable<SuggestionResponse[]> {
    return this.http.get<SuggestionResponse[]>(
      `${this.apiUrl}?userId=${userId}`
    );
  }
}
