import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { CoursComponent } from './cours/cours.component';


const routes: Routes = [
  { path: 'enseignant', component: EnseignantComponent },
  { path: 'cours', component: CoursComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
