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
import { PeriodePipe } from './periode.pipe';
import { Semestre1Pipe } from './semestre1.pipe';
import { Semestre2Pipe } from './semestre2.pipe';
import { Semestre3Pipe } from './semestre3.pipe';
import { Semestre4Pipe } from './semestre4.pipe';
import { Semestre5Pipe } from './semestre5.pipe';
import { Semestre6Pipe } from './semestre6.pipe';
import { Semestre7Pipe } from './semestre7.pipe';
import { Semestre8Pipe } from './semestre8.pipe';
import { Semestre9Pipe } from './semestre9.pipe';
import { Semestre10Pipe } from './semestre10.pipe';
import { CyclePipe } from './cycle.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EnseignantComponent,
    CoursComponent,
    EnseignementComponent,
    CoursDetailComponent,
    PeriodePipe,
    Semestre1Pipe,
    Semestre2Pipe,
    Semestre3Pipe,
    Semestre4Pipe,
    Semestre5Pipe,
    Semestre6Pipe,
    Semestre7Pipe,
    Semestre8Pipe,
    Semestre9Pipe,
    Semestre10Pipe,
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
