import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IItems } from './item';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TestItemsService {
Url = 'http://localhost/api/list.php';
getIdUrl = 'http://localhost/api/getbyId.php';
editbyIdUrl = 'http://localhost/api/editbyId.php';
supplyId : number | undefined

  constructor(private http: HttpClient) { }

  getItems() :Observable<any[]>{
    return this.http.get<any[]>(this.Url)
  }
  setId(supplyId: any){
    this.supplyId = supplyId
  }
  getitemsbyId(supplyId: any) : Observable<any>{
    return this.http.post<any>(this.getIdUrl, supplyId)
  }
  edititembyId(items : any[]): Observable<any[]>{
    return this.http.post<any[]>(this.editbyIdUrl, items)
  }
}
