import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner } from './banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  url = 'http://localhost:52356/api';
  private http: HttpClient;
  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }
  getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]> (this.url + '/' + 'getBanners');
  }
  getBannerbyId(Id: number): Observable<Banner> {
    return this.http.get<Banner>(this.url + '/' + 'GetBannerbyId?id=' + Id + '');
  }
  postFile(caption: Banner ,  Image: File) {

    const newurl = this.url + '/' + 'AddBannner';
    const formData: FormData = new FormData();
    formData.append('Title1', caption.Title1);
    formData.append('Title2', caption.Title2);
    formData.append('Image', Image , Image.name);
    return this.http.post(newurl, formData);

  }
  DeleteBanner(Id: number): Observable<number> {
    // tslint:disable-next-line:prefer-const
    let httpHeader = new HttpHeaders().set('Content-Type' , 'application/json');
  return this.http.delete<number>(this.url + '/' + 'DeleteBanner?id='  + Id + '');
  }
  GetOneBanner(): Observable<Banner[]> {
return this.http.get<Banner[]>(this.url + '/' + 'GetSingleBanner');
  }
}
