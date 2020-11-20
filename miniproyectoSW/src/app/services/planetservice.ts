import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {PlanetResponse} from '../interfaces/PlanetResponse';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  direccionAPI = 'https://swapi.dev/api/planets';
  /*header = {
    "Content-Type":"application/json",
    "Vary":"Accept",
    "Allow":[
      "GET",
      "HEAD",
      "OPTIONS"
    ]
  }*/
  header:HttpHeaders = new HttpHeaders();
  

  constructor(private http: HttpClient) {
    this.header.append('Content-Type','application/json');
    this.header.append('Vary','Accept');
    this.header.append('Allow',[
      'GET',
      'HEAD',
      'OPTIONS'
    ]);
   }

  /*getPlanets(): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(
      this.direccionAPI,
      this.header

    );
  }*/

  /*getPlanets(): Observable<PlanetsResponse> {
    return this.http.get<PlanetsResponse>( this.urlAPI, /this.header/ );
  }*/

}
