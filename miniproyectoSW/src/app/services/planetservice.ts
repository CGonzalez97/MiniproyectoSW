import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {PlanetResponse} from '../interfaces/PlanetResponse';


const direccionAPI = "https://swapi.dev/api/planets/";

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  
  

  constructor(private http: HttpClient) {   }

  getPlanets(): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>( direccionAPI, requestOptions );
  }

}
