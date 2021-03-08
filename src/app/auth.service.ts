import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Url = 'http://localhost/api/auth.php';
  private loggedinStatus = false;

  constructor(private http: HttpClient) { }

  setloggedIn(value: boolean){
  this.loggedinStatus = value
  }
  get isloggedIn(){
    return this.loggedinStatus
  }

  loginUser(username: any, password: any): Observable<any>{
   //post request to ph
    const body = {username:username, 
                  password:password}
      return this.http.post<any>(this.Url, body)
  }
}
