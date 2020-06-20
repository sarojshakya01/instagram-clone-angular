import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../modules/Post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl: string = 'http://localhost:3001/';

  constructor(private http: HttpClient) {}

  // Get Posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}post`);
  }

  // Delete Post
  deletePost(post: Post): Observable<Post> {
    const url = `${this.apiUrl}post?d=${post.postid}`;
    return this.http.delete<Post>(url, httpOptions);
  }

  //Add Post
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}addPost`, post, httpOptions);
  }

  //like post
  likePost(params): Observable<any> {
    const myParams = { params };
    return this.http.post<any>(`${this.apiUrl}likePost`, myParams, httpOptions);
  }
}
