import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddItemService { 
Url = 'http://localhost/api/adduser.php';

  constructor(private http: HttpClient) { }

  add(item : any = []) :Observable<any[]>{
    return this.http.post<any[]>(this.Url, item)
  }
}
