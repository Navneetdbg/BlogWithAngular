import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpBackend} from '@angular/common/http';
import {throwError, Observable} from 'rxjs';
import { Page } from './page';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class CmspageService {

  url = 'http://localhost:52356/api';
  private http: HttpClient;
constructor(handler: HttpBackend) {
  this.http = new HttpClient(handler);
}
getAboutUs(slug: string): Observable<Page> {
  return this.http.get<Page>(this.url + '/' + 'AboutUs?title=' + slug + '');
}
AddContact(contact: Contact) {
  // tslint:disable-next-line:prefer-const
  let httpHeader = new HttpHeaders().set('Content-Type' , 'application/json');
  // tslint:disable-next-line:prefer-const
  let option = {
    headers: httpHeader
    };
    return this.http.post<Contact>(this.url + '/' + 'AddContact' , contact , option);
}
}
