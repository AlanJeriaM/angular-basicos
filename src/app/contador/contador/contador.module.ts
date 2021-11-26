import { NgModule, Component } from '@angular/core';
import { contadorComponent } from '../contador.component';

@NgModule({
    declarations: [
      contadorComponent,
    ],
    exports: [
      contadorComponent,
    ],
  })

export class ContadorModule{}