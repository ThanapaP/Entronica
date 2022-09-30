import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginApi, RegisterApi, User, UserApi } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  constructor(private http: HttpClient) {
    // this.users = this.initMockUsers();
  }


  getAllUser(): Observable<UserApi> {
    return this.http.get<UserApi>('http://localhost:3000/api/user/user');
  }
  getUserById(_id: string): User | undefined {
    return this.users.find((el) => el._id === _id);
  }

  login(email: string, password: string): Observable<LoginApi>{
    const body = {
      email: email,
      password: password
  }
  return this.http.post<LoginApi>('http://localhost:3000/api/user/login',body);
  }

  register(body: any): Observable<RegisterApi>{
    return this.http.post<RegisterApi>(
      'http://localhost:3000/api/user/register', body
    );
  
}


  

  addUser(user: User): boolean | undefined {
    if (this.users.find((el) => el._id === user._id)) {
      return false;
    }
    this.users.push(user);
    return true;
  }
}
