import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserResponse } from '../modules/User';
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
export class UserService {
  private apiUrl: string = API_URL + 'user/';

  constructor(private http: HttpClient) {}

  // Get user profile
  getUserProfile(userId: string): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.apiUrl}${userId}`);
  }
}
