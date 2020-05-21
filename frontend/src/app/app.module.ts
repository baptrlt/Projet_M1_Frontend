import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursComponent } from './cours/cours.component';
import { EnseignementComponent } from './enseignement/enseignement.component';
import { SavoirComponent } from './savoir/savoir.component';
import { CycleComponent } from './cycle/cycle.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EnseignantComponent,
    CoursComponent,
    EnseignementComponent,
    SavoirComponent,
    CycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
