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
  private postsUrl: string = 'http://localhost:3001/post';

  constructor(private http: HttpClient) {}

  // Get Posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}`);
  }

  // Delete Post
  deletePost(post: Post): Observable<Post> {
    const url = `${this.postsUrl}/${post.postid}`;
    return this.http.delete<Post>(url, httpOptions);
  }

  //Add Post
  addpPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  // Toggle Completed
  toggleCompleted(post: Post): Observable<any> {
    const url = `${this.postsUrl}/${post.postid}`;
    return this.http.put(url, post, httpOptions);
  }
}
