import { Component, OnInit } from '@angular/core';
import {Planet} from '../interfaces/Planet';
import {PlanetService} from '../services/planetservice';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-planets-listado',
  templateUrl: './planets-listado.component.html',
  styleUrls: ['./planets-listado.component.scss']
})
export class PlanetsListadoComponent implements OnInit {

  listadoPlanetas: Planet[];
  columnsToDisplay = ['name', 'rotation_period','orbital_period','diameter','climate','gravity','terrain','surface_water','population'];
  planetService:PlanetService;

  constructor(planetService: PlanetService) {
    this.planetService = planetService;
   }

  ngOnInit(): void {
    this.loadPlanets();
  }

  loadPlanets() {
    this.planetService.getPlanets().subscribe(resp => {
       this.listadoPlanetas = resp.results;
    });
 }


}
