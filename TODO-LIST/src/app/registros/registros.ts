import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registros',
  imports: [],
  templateUrl: './registros.html',
  styleUrl: './registros.css'
})
export class Registros {
 
  @Input() reg: {id: number, descripcion: string}[] = [];

  eventoEliminar(id:number): void{
    //this.registros = this.registros.filter(reg => reg.id !== id);
    console.log("Listo");
    
  }
}
