// Fichier: monnaie.component.ts
// Dev: Tom Strohmeier
// Date: 10/21/2022

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPC } from 'src/modeles/IPC';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-monnaie',
  templateUrl: './monnaie.component.html',
  styleUrls: ['./monnaie.component.css']
})
export class MonnaieComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getData();
    this.PreciSelect = this.Precisions[2];
  }

  ngOnInit(): void {
  }
  Data: IPC[] = [{ an: 0, taux: 0 }]; // objet temporaire remplacer par requète http apres initialisation
  httpRequest = this.connexion();
  Precisions = AppComponent.Precisions;
  Entree: IPC = this.Data[0];
  Sortie: IPC = this.Data[this.Data.length - 1];
  PreciSelect!: number;
  UserInput: number = 100;

  // -------------------------------------

  // -------------------------------------

  connexion() {
    let serveur: string = "https://amartel.techinfo-cstj.ca/getIPC.php";

    return this.http.get<IPC[]>(serveur);
  }

  // -------------------------------------

  // -------------------------------------

  getData() {
    this.httpRequest.subscribe(res => {
      this.Data = res;
      this.Sortie = this.Data[this.Data.length - 1];
      this.Entree = this.Data[0];
    });
  }

  // -------------------------------------

  // -------------------------------------

  convertir() {
    let e: IPC = this.Entree;
    let s: IPC = this.Sortie;
    let total: number = 1;
    let x: number = this.UserInput;

    this.Data.forEach(element => {
      if (e.an > s.an) {
        if (element.an >= s.an && element.an <= e.an) {
          total /= (1 + element.taux);
        }
      }
      if (e.an < s.an) {
        if (element.an >= e.an && element.an <= s.an) {
          total *= (1 + element.taux);
        }
      }
    });
    total *= x;
    return total.toFixed(this.PreciSelect);
  }
}

