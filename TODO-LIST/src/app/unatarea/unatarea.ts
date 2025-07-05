import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-unatarea',
  imports: [],
  templateUrl: './unatarea.html',
  styleUrl: './unatarea.css'
})
export class Unatarea {
  @Input() id: number = 0;
  @Input() descripcion: string = "";  


}




