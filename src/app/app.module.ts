import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DimenssionsComponent } from './dimenssions/dimenssions.component';
import { PoidsComponent } from './poids/poids.component';
import { TemperaturesComponent } from './temperatures/temperatures.component';
import { MonnaieComponent } from './monnaie/monnaie.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DimenssionsComponent,
    PoidsComponent,
    TemperaturesComponent,
    MonnaieComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
