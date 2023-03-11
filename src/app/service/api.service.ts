import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(
    private http: HttpClient,
  ) { }
  postService(paramReq: any): Observable<T> {
    const headers = new HttpHeaders( {
      accept: 'application/json',
    });

    const { url, params, body } = paramReq;
    const options= {
      headers,
      params
    }
    return this.http.post<T>(url, body, options).pipe(map(res => res), catchError(this.headerError) ) ;
  }

  getService(paramReq: any): Observable<T> {
    const headers = new HttpHeaders( {
      accept: 'application/json',
    });

    const { url, params } = paramReq;
    const options= {
      headers,
      params
    }
    return this.http.get<T>(url, options).pipe(map(res => res), catchError(this.headerError) ) ;
  }

  private headerError(err: HttpErrorResponse) {
    console.log(err.error);

    return throwError(() => err);
  }
}
