import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../modules/Post';
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
export class PostService {

  constructor(private http: HttpClient) { }

  // Get Posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${API_URL}post/all`);
  }

  // Delete Post
  deletePost(post: Post): Observable<Post> {
    const url = `${this.apiUrl}post/delete/${post.postid}`;
    return this.http.delete<Post>(url, httpOptions);
  }

  //Add Post
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}post/add`, post, httpOptions);
  }

  //like post
  likePost(params): Observable<any> {
    const myParams = { params };
    return this.http.post<any>(`${this.apiUrl}post/like`, myParams, httpOptions);
  }
}
