import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { Categories } from '../categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'http://localhost:52356/api/Categories';
  private http: HttpClient;
constructor(handler: HttpBackend) {
  this.http = new HttpClient(handler);
}
getAll(): Observable<Categories[]> {
  return this.http.get<Categories[]>(this.url);
  }
  Add(page: Categories): Observable<Categories> {
     // tslint:disable-next-line:prefer-const
     let httpHeader = new HttpHeaders().set('Content-Type' , 'application/json');
     // tslint:disable-next-line:prefer-const
     let option = {
     headers: httpHeader
     };
    return this.http.post<Categories>(this.url , page, option);
  }
  Edit(page: Categories): Observable<number> {
    // tslint:disable-next-line:prefer-const
    let httpHeader = new HttpHeaders().set('Content-Type' , 'application/json');
  // tslint:disable-next-line:prefer-const
  let option = {
  headers: httpHeader
  };
  return this.http.put<number>(this.url + '/' + page.Id , page , option);
  }
  getbyId(Id: number): Observable<Categories> {
    return this.http.get<Categories>(this.url + '/' + Id );
  }
  Delete(Id: number): Observable<number> {
    // tslint:disable-next-line:prefer-const
    let httpHeader = new HttpHeaders().set('Content-Type' , 'application/json');
  return this.http.delete<number>(this.url + '/' + Id );
  }

}
