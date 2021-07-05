import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: '/etudiant' },
 { path:'etudiant',component:EtudiantComponent },
 { path:'addStudents',component:AddEtudiantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
