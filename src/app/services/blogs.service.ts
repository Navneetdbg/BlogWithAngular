import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../models/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
url = 'http://localhost:52356/api';
  private http: HttpClient;
constructor(handler: HttpBackend) {
  this.http = new HttpClient(handler);
}
getBlogs(): Observable<Blogs[]> {
  return this.http.get<Blogs[]>(this.url + '/' + 'GetBlogs');
}
postFile(caption: Blogs ,  Image: File) {

  const newurl = this.url + '/' + 'AddBlogs';
  const formData: FormData = new FormData();
  formData.append('title', caption.title);
  formData.append('short_desc', caption.short_desc);
  formData.append('Long_desc', caption.Long_desc);
  formData.append('IsFeatured', String(caption.IsFeatured));
  formData.append('IsRecent', String(caption.IsRecent));
  formData.append('author', String(caption.author));
  formData.append('Image', Image , Image.name);
  return this.http.post(newurl, formData);
    }
    Deletepost(Id: number): Observable<number> {
      // tslint:disable-next-line:prefer-const
      let httpHeader = new HttpHeaders().set('Content-Type' , 'application/json');
      return this.http.delete<number>(this.url + '/' + 'DeleteBlog?id=' + Id + '');
    }
    EditBlog(caption: Blogs, Id: number , Image: File): Observable<number> {
      const newurl = this.url + '/' + 'EditBlogs?Id=' + caption.Id ;
      const formData: FormData = new FormData();
      formData.append('title', caption.title);
      formData.append('short_desc', caption.short_desc);
      formData.append('Long_desc', caption.Long_desc);
      formData.append('IsFeatured', String(caption.IsFeatured));
      formData.append('IsRecent', String(caption.IsRecent));
      formData.append('author', String(caption.author));
      formData.append('Image', Image , Image.name);
      return this.http.put<number>(newurl, formData);
    }
}
