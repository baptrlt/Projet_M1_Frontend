import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoursComponent } from './cours/cours.component';
import { EnseignementComponent } from './enseignement/enseignement.component';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';
import { CyclePipe } from './cycle.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EnseignantComponent,
    CoursComponent,
    EnseignementComponent,
    CoursDetailComponent,
    CyclePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
