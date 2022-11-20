import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Meowfact } from './meowfact';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class MeowfactsService {

  private meowfactsUrl = 'https://meowfacts.herokuapp.com';

  constructor(private http: HttpClient) { }

  getMeowfact(): Observable<Meowfact> {
    return this.http.get<{ data: string[] }>(this.meowfactsUrl, httpOptions)
      .pipe(
        map(x => {
          return { data: x.data[0] }
        })
      )
  }

}
