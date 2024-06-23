import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, tap, throwError } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class HttpService {
  private serviceURL: string = "http://13.126.132.25:8080/";
  constructor(private httpClient: HttpClient, private loaderService: LoaderService) { }

  getHTTP(methodName: string): Observable<any> {
    this.loaderService.loaderStart();
    return this.httpClient.get(this.serviceURL + methodName)
      .pipe(
        delay(200),
        tap(() => this.loaderService.loaderEnd()),
        catchError(() => this.errorHandler())
      );
  }

  postHTTP(methodName: string, body: any): Observable<any> {
    this.loaderService.loaderStart();
    return this.httpClient.post(this.serviceURL + methodName, body)
      .pipe(delay(200),
        tap(() => this.loaderService.loaderEnd()),
        catchError(() => this.errorHandler()));
  }

  getHTTPbyId(methodName: string, id: number): Observable<any> {
    this.loaderService.loaderStart();
    return this.httpClient.get(this.serviceURL + methodName + "/" + id)
      .pipe(delay(1000), tap(() => this.loaderService.loaderEnd()),
        catchError(() => this.errorHandler()));
  }

  errorHandler(error?: HttpErrorResponse) {
    return throwError(() => {
      this.loaderService.loaderEnd();
      return new Error('API Call Failed');
    })
  }

}
