import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'TODO-LIST';
  Tareas: tarea[] = [];
  desc = "";

eventoClick(){
   this.Tareas.push({id: this.Tareas.length +1, descripcion: this.desc});
   this.desc = "";

}
eventoDelete(id:number){
  //this.Tareas = this.Tareas.filter(desc => desc.id =! id)
}

}
export interface tarea{id:number, descripcion:string};



