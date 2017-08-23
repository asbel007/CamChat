import { MainComponent } from './main/main.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditComponent } from './edit/edit.component';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms/src/directives';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    AgregarComponent,
    BuscarComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AdminRoutingModule
  ],
  exports: [
    MainComponent,
    AgregarComponent,
    BuscarComponent,
    EditComponent
  ],
  providers: []
})
export class AdminModule { }
