import { Component, OnInit } from '@angular/core';
import { Film } from '../interfaces/Film';
import {FilmsService} from '../services/filmservice';

@Component({
  selector: 'app-films-listado',
  templateUrl: './films-listado.component.html',
  styleUrls: ['./films-listado.component.scss']
})
export class FilmsListadoComponent implements OnInit {

  listadoPeliculas: Film[];
  filmService:FilmsService;

  constructor(filmService: FilmsService) {
    this.filmService = filmService;
   }

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms().subscribe(resp => {
       this.listadoPeliculas = resp.results;
    });
 }

}
