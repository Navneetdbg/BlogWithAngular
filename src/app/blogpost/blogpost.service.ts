import { Injectable } from '@angular/core';
import {Blogpost} from './blogpost';
import {HttpClient, HttpBackend} from '@angular/common/http';
import {throwError, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Category} from './category';
@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
url = 'http://localhost:52356/api';
private http: HttpClient;
constructor(handler: HttpBackend) {
  this.http = new HttpClient(handler);
}
getBlogs(): Observable<Blogpost[]> {
  return this.http.get<Blogpost[]>(this.url + '/' + 'GetBlogs');
}
getFeaturedBlog(): Observable<Blogpost[]> {
  return this.http.get<Blogpost[]>(this.url + '/' + 'GetFeaturesBlog');
}
getRecentBlog(): Observable<Blogpost[]> {
  return this.http.get<Blogpost[]>(this.url + '/' + 'GetRecentBlog');
}
getBlog(Id: number): Observable<Blogpost> {
  return this.http.get<Blogpost>(this.url + '/' + 'GetBlog?id=' + Id + '');
}
getCategories(): Observable<Category[]> {
  return this.http.get<Category[]>(this.url + '/' + 'Category');
}
}


  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {

  //     // A client-side or network error occurred. Handle it accordingly.

  //     console.error('An error occurred:', error.error.message);
  //   } else {

  //     // The backend returned an unsuccessful response code.

  //     // The response body may contain clues as to what went wrong,

  //     console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  //   }

  //   // return an observable with a user-facing error message

  //   this.errorData = {
  //     errorTitle: 'Oops! Request for document failed',
  //     errorDesc: 'Something bad happened. Please try again later.'
  //   };
  //   return throwError(this.errorData);
  // }


