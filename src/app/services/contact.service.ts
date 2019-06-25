import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../cmspage/contact';
import { Contacts } from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
url = 'http://localhost:52356/api/Contacts';

constructor(private http: HttpClient) {}
getAll(): Observable<Contact[]> {
  return this.http.get<Contact[]>(this.url);

}
GetById(Id: number): Observable<Contact> {
  return this.http.get<Contact>(this.url + '/' + Id);
}
Reply(Con: Contacts) {
  const url2 = 'http://localhost:52356/api/PostEmail';
  const formData: FormData = new FormData();
  formData.append('Email', Con.Email);
  formData.append('Message', Con.Message);
  formData.append('Reply', Con.Reply);
  formData.append('Name', Con.Name);
  return this.http.post(url2, formData);
}
}
