import { Injectable } from '@angular/core';
import { API_URL } from '../app.api';
import { HttpClient } from '@angular/common/http';
import { Game } from '../games/game.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserAuth } from '../auth/user-auth.model';
import { tap } from 'rxjs/operators';

interface IUser {
  role?: string;
  games: Game[];
  _id: string;
  name: string;
  email: string
}
export interface AuthResponse {
  status: string;
  token: string;
  tokenExpiration: Date;
  user: IUser;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base_url = API_URL + '/users'
  constructor(private http: HttpClient) { }
  user = new BehaviorSubject<UserAuth>(null);

  login(email: string, password: string): Observable<AuthResponse> {
    console.log(email, password)
    return this.http.post<AuthResponse>(this.base_url + '/login', {
      email,
      password
    }).pipe(
      tap(resData => {
        console.log('ResData:', resData)
        this.handlerAuthentication(resData.user, resData.token, resData.tokenExpiration)
      })
    )
  }

  signUp(name: string, email: string, password: string,
    passwordConfirm: string): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(this.base_url + '/signUp', {
      name,
      email,
      password,
      passwordConfirm
    })
  }

  private handlerAuthentication(user: IUser, token: string, tokenExpiration: Date) {
    const userAuth = new UserAuth(user.role, user._id, user.email, token, tokenExpiration);
    this.user.next(userAuth);
    localStorage.setItem('userData', JSON.stringify(userAuth));
  }
}
