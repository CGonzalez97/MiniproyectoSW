import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {PlanetService} from './services/planetservice';
import {FilmsService} from './services/filmservice';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import { PlanetsListadoComponent } from './planets-listado/planets-listado.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FilmsListadoComponent } from './films-listado/films-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListadoComponent,
    FilmsListadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [PlanetService,
    FilmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
