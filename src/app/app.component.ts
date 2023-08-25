// --------------------------------------------------------
// Fichier: app.component.ts
// Dev: Tom Strohmeier
// Date: 10/13/2022
// --------------------------------------------------------

import { Component, EventEmitter, Output } from '@angular/core';
import { applyStyles } from '@popperjs/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'converto';
  public static Precisions = [0, 1, 2, 3, 4, 5];
  activeTab: number = 1;

  // -------------------------------------

  // -------------------------------------

  setActiveTab(activeTab: number) {
    this.activeTab = activeTab;
  }

}
