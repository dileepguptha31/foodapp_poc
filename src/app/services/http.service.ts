import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class HttpService {
  private serviceURL: string = "http://52.66.238.60:8080/";
  constructor(private httpClient: HttpClient, private loaderService: LoaderService) { }

  getHTTP(methodName: string): Observable<any> {
    this.loaderService.loaderStart();
    return this.httpClient.get(this.serviceURL + methodName)
      .pipe(tap(() => this.loaderService.loaderEnd()));
  }

  postHTTP(methodName: string, body: any): Observable<any> {
    this.loaderService.loaderStart();
    return this.httpClient.post(this.serviceURL + methodName, body)
      .pipe(tap(() => this.loaderService.loaderEnd()));
  }

  getHTTPbyId(methodName: string, id: number): Observable<any> {
    this.loaderService.loaderStart();
    return this.httpClient.get(this.serviceURL + methodName + "/" + id)
      .pipe(tap(() => this.loaderService.loaderEnd()));
  }
}
