import { Component } from '@angular/core';
@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
    <h3>La base es: <strong> {{base}} </strong></h3>

    <button (click)="acumular(base)"> + 5</button>
    <span>{{numero}}</span>
    <button (click)=acumular(-base)> - 5</button>
    
    
    
    `

})
 

export class contadorComponent{
  titulo: string = 'Contador App';
  numero: number = 10;
  base  : number = 5;

  sumar(){
    this.numero += 5; //this hacer referencia a la propiedad de la clase
  }

  restar(){
    this.numero -= 5; //this hacer referencia a la propiedad de la clase
  }
  //de otra forma
  acumular(valor:number){
    this.numero+=valor;
  }

  
}