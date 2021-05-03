import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Nota } from '../nota.model';

@Component({
  selector: 'nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  @Input()currentNota:Nota;

  @Output() evtEliminar:EventEmitter<Nota> = new EventEmitter();

  ngOnInit() {

  }

  eliminarNota()
  {    
     this.evtEliminar.emit(this.currentNota);
  }

}
