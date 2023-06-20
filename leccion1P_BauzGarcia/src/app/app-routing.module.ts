import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatospersonalesComponent } from './components/datospersonales/datospersonales.component';
import { TablaestudianteComponent } from './components/tablaestudiante/tablaestudiante.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent }, 
  { path: 'datos', component:DatospersonalesComponent }, 
  { path: 'tabla', component:TablaestudianteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
