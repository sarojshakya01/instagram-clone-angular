import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment, CommentResponse } from '../modules/Comment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl: string = 'http://localhost:3001/';

  constructor(private http: HttpClient) {}

  // Get Posts
  // getComments(): Observable<Comment[]> {
  //   return this.http.get<Comment[]>(`${this.apiUrl}post`);
  // }

  // Delete Post
  deleteComment(params: any): Observable<any> {
    const myParams = { params };
    return this.http.post<any>(
      `${this.apiUrl}deleteComment`,
      myParams,
      httpOptions
    );
  }

  //Add Comment
  addComent(params: any): Observable<CommentResponse> {
    const myParams = { params };
    return this.http.post<CommentResponse>(
      `${this.apiUrl}addComment`,
      myParams,
      httpOptions
    );
  }

  //like post
  likeComment(params: any): Observable<any> {
    const myParams = { params };
    return this.http.post<any>(
      `${this.apiUrl}likeComment`,
      myParams,
      httpOptions
    );
  }
}
