import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Response} from "../types";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = 'https://itunes.apple.com/search?term=Beatles&entity=album';
  constructor(private http: HttpClient) {
  }
  getResponse(): Observable<Response> {
    return this.http.get<Response>(this.apiUrl);
  }
}

