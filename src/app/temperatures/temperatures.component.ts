// Fichier: temperatures.component.ts
// Dev: Tom Strohmeier
// Date: 10/21/2022

import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/modeles/Unit';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.css']
})
export class TemperaturesComponent implements OnInit {

  constructor() {
    this.Temperatures = [new Unit("Celsius", 1), new Unit("Kelvin", 273.15), new Unit("Fahrenheit", 32)];
    this.Entree = this.Temperatures[0];
    this.Sortie = this.Temperatures[2];
    this.PreciSelect = this.Precisions[2];
  }

  ngOnInit(): void {
  }

  Temperatures!: Unit[];
  Precisions = AppComponent.Precisions;
  Entree!: Unit;
  Sortie!: Unit;
  PreciSelect: number;
  UserInput: number = 20;

  // -------------------------------------

  // -------------------------------------

  convertir() {
    let e: Unit = this.Entree;
    let s: Unit = this.Sortie;
    let x: number = this.UserInput;
    let resultat: number = x;

    switch (e.str) {
      case "Celsius":
        if (s.str === "Kelvin") {
          resultat = (x + s.Value);
        }

        if (s.str === "Fahrenheit") {
          resultat = ((x * (9 / 5)) + s.Value);
        }
        break;

      case "Kelvin":
        if (s.str === "Celsius") {
          resultat = (x - e.Value);
        }

        if (s.str === "Fahrenheit") {
          resultat = (((x - e.Value) * (9 / 5)) + 32);
        }
        break;

      case "Fahrenheit":
        if (s.str === "Celsius") {
          resultat = ((x - 32) * (5 / 9));
        }

        if (s.str === "Kelvin") {
          resultat = (((x - 32) * (5 / 9)) + s.Value);
        }
        break;
    }
    return resultat.toFixed(this.PreciSelect);
  }
}
