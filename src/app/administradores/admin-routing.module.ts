import { NgModule } from '@angular/core';
import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { MainComponent } from './main/main.component';


const adminRoutes: Routes = [
  {
    path: 'admin-panel',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'buscar' , pathMatch: 'full' },
      { path: 'buscar', component: BuscarComponent },
      { path: 'agregar', component: AgregarComponent },
    ]
  },
  {  path: 'admin-main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}





