import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contenido-nota',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  @Input() contenido:string; 
  
  constructor() { }

  ngOnInit() {
  }

}
