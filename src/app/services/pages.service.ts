import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpBackend} from '@angular/common/http';
import {Pages} from '../pages';
import {throwError, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PagesService {
  url = 'http://localhost:52356/api';
  private http: HttpClient;
constructor(handler: HttpBackend) {
  this.http = new HttpClient(handler);
}
getAllPages(): Observable<Pages[]> {
return this.http.get<Pages[]>(this.url + '/' + 'AllPages');
}
AddPages(page: Pages): Observable<Pages> {
   // tslint:disable-next-line:prefer-const
   let httpHeader = new HttpHeaders().set('Content-Type' , 'application/json');
   // tslint:disable-next-line:prefer-const
   let option = {
   headers: httpHeader
   };
  return this.http.post<Pages>(this.url + '/' + 'AddPages', page, option);
}
EditPages(page: Pages): Observable<number> {
  // tslint:disable-next-line:prefer-const
  let httpHeader = new HttpHeaders().set('Content-Type' , 'application/json');
// tslint:disable-next-line:prefer-const
let option = {
headers: httpHeader
};
return this.http.put<number>(this.url + '/' + 'EditPage?id=' + page.Id + '', page , option);
}
getPageId(Id: number): Observable<Pages> {
  return this.http.get<Pages>(this.url + '/' + 'GetPageById?Id='  + Id + '');
}
DeletePeople(Id: number): Observable<number> {
  // tslint:disable-next-line:prefer-const
  let httpHeader = new HttpHeaders().set('Content-Type' , 'application/json');
return this.http.delete<number>(this.url + '/' + 'DeletePages?id='  + Id + '');
}
}
