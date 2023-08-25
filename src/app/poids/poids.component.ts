// Fichier: poids.component.ts
// Dev: Tom Strohmeier
// Date: 10/21/2022

import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/modeles/Unit';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.css']
})
export class PoidsComponent implements OnInit {

  constructor() {
    this.Poids = [new Unit("g", 1000), new Unit("kg", 1), new Unit("tonne mét", 0.001), new Unit("once", 35.274), new Unit("livre", 2.20462), new Unit("tonne courte", 0.00110231)];
    this.Entree = this.Poids[1];
    this.Sortie = this.Poids[4];
    this.PreciSelect = this.Precisions[2];
  }

  ngOnInit(): void {
  }
  Poids!: Unit[];
  Precisions = AppComponent.Precisions;
  Entree!: Unit;
  Sortie!: Unit;
  PreciSelect: number;
  UserInput: number = 1;

  // -------------------------------------

  // -------------------------------------

  convertir() {
    let e: Unit = this.Entree;
    let s: Unit = this.Sortie;
    let resultat: number = 0;

    resultat = (this.UserInput / e.Value) * s.Value;
    return resultat.toFixed(this.PreciSelect);
  }

}