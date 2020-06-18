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
  private suggestionsUrl: string = 'http://localhost:3001/suggestion';

  constructor(private http: HttpClient) {}

  // Get suggestions
  getSuggestions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.suggestionsUrl}`);
  }

  //Add Story
  addStory(Story: SuggestionResponse): Observable<SuggestionResponse> {
    return this.http.post<SuggestionResponse>(
      this.suggestionsUrl,
      Story,
      httpOptions
    );
  }
}
