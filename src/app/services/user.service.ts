import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserResponse } from '../modules/User';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = 'http://localhost:3001/userDetails';

  constructor(private http: HttpClient) {}

  // Get user profile
  getUserProfile(userId: string): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.apiUrl}?userId=${userId}`);
  }
}
