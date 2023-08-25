// Fichier: dimenssions.component.ts
// Dev: Tom Strohmeier
// Date: 10/21/2022

import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { Unit as Unit } from 'src/modeles/Unit';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dimenssions',
  templateUrl: './dimenssions.component.html',
  styleUrls: ['./dimenssions.component.css']
})
export class DimenssionsComponent implements OnInit {

  constructor() {
    this.Dimensions = [new Unit("mm", 1000), new Unit("cm", 100), new Unit("m", 1), new Unit("km", 0.001), new Unit("pouce", 39.3701), new Unit("pied", 3.28084), new Unit("verge", 1.09361), new Unit("mile", 0.000621371)];
    this.Entree = this.Dimensions[2];
    this.Sortie = this.Dimensions[4];
    this.PreciSelect = this.Precisions[2];
    this.DDSelect = this.DDimension[0];
  }

  ngOnInit(): void {
  }

  Dimensions!: Unit[];
  Precisions = AppComponent.Precisions;
  DDimension = [1, 2, 3];
  PreciSelect: number;
  Entree!: Unit;
  Sortie!: Unit;
  DDSelect: number;
  Longueur: number = 1;
  Largeur: number = 1;
  Profondeur: number = 1;

  // -------------------------------------

  // -------------------------------------
  convertir1D(inputNb: number) {
    let e: Unit = this.Entree;
    let s: Unit = this.Sortie;
    let resultat = 0;

    if (inputNb === 1) {
      resultat = (this.Longueur / e.Value) * s.Value;
    }
    if (inputNb === 2) {
      resultat = (this.Largeur / e.Value) * s.Value;
    }
    if (inputNb === 3) {
      resultat = (this.Profondeur / e.Value) * s.Value;
    }
    return resultat.toFixed(this.PreciSelect);
  }

  // -------------------------------------

  // -------------------------------------

  convertir2D() {
    let e: Unit = this.Entree;
    let s: Unit = this.Sortie;
    let resBase = 0;
    let resModif = 0;
    let message: string;

    resBase = (this.Longueur / e.Value) * (this.Largeur / e.Value);

    resModif = (((this.Longueur / e.Value) * s.Value) * (((this.Largeur / e.Value) * s.Value)));

    message = "Surface: " + resBase.toFixed(this.PreciSelect) + " " + e.str + " carré = " + resModif.toFixed(this.PreciSelect) + " " + s.str + " carré.";

    return message;
  }

  // -------------------------------------

  // -------------------------------------

  convertir3D() {
    let e: Unit = this.Entree;
    let s: Unit = this.Sortie;
    let resBase = 0;
    let resModif = 0;
    let message: string;

    resBase = (this.Longueur / e.Value) * (this.Largeur / e.Value) * (this.Profondeur / e.Value);

    resModif = (((this.Longueur / e.Value) * s.Value) * (((this.Largeur / e.Value) * s.Value)) * ((this.Profondeur / e.Value) * s.Value));

    message = "Volume: " + resBase.toFixed(this.PreciSelect) + " " + e.str + " cube = " + resModif.toFixed(this.PreciSelect) + " " + s.str + " cube.";

    return message;
  }
}