import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment, CommentResponse } from '../modules/Comment';
import { Observable } from 'rxjs';
import { API_URL } from 'src/config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  // Get Posts
  // getComments(): Observable<Comment[]> {
  //   return this.http.get<Comment[]>(`${API_URL}post`);
  // }

  // Delete Post
  deleteComment(params: any): Observable<any> {
    const myParams = { params };
    return this.http.post<any>(
      `${API_URL}comment/delete`,
      myParams,
      httpOptions
    );
  }

  //Add Comment
  addComent(params: any): Observable<CommentResponse> {
    const myParams = { params };
    return this.http.post<CommentResponse>(
      `${API_URL}comment/add`,
      myParams,
      httpOptions
    );
  }

  //like post
  likeComment(params: any): Observable<any> {
    const myParams = { params };
    return this.http.post<any>(`${API_URL}comment/like`, myParams, httpOptions);
  }
}
