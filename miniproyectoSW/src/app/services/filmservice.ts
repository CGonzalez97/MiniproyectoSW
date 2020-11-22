import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {FilmResponse} from '../interfaces/FilmResponse';

const direccionAPI = "https://swapi.dev/api/films/";

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) {   }

  getFilms(): Observable<FilmResponse> {
    return this.http.get<FilmResponse>( direccionAPI, requestOptions );
  }
}