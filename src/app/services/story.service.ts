import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoryResponse } from '../modules/Story';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private apiUrl: string = 'http://localhost:3001/story';

  constructor(private http: HttpClient) {}

  // Get stories
  getStories(): Observable<StoryResponse[]> {
    return this.http.get<StoryResponse[]>(`${this.apiUrl}`);
  }

  //Add Story
  addStory(Story: StoryResponse): Observable<StoryResponse> {
    return this.http.post<StoryResponse>(this.apiUrl, Story, httpOptions);
  }
}
