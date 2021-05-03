import { Component } from '@angular/core';
import { Nota } from './nota.model';


const tiempoEspera:number = 1600;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  
  notas:Nota[];
  
  alertarNotaGuardada:boolean;
  alertarNotaEliminada:boolean;
  
  alertarFormIncompleto:boolean;
  

  constructor()
  {
    this.alertarNotaGuardada = false; // la nota posee clase invisible desde el principio
    this.alertarFormIncompleto =  false; 
    this.notas = new Array<Nota>();
    /**
    this.notas.push(new Nota("Titulo de la nota 1","Contenido"));
    this.notas.push(new Nota("Titulo de la nota 2 ","Contenido"));
    this.notas.push(new Nota("Titulo de la nota 3","Contenido"));
    this.notas.push(new Nota("Titulo de la nota 4","Contenido"));
     */
  }

  agregarNota(title:HTMLInputElement,content:HTMLInputElement)
  {
      if(title.value == "" || content.value == ""){ 
        // mostrar un alert de que esta vacío el form
        this.alertarFormIncompleto = !this.alertarFormIncompleto;
         setTimeout(()=>{this.alertarFormIncompleto = !this.alertarFormIncompleto;},tiempoEspera);      
        return false;
      }
        this.notas.push(new Nota(title.value,content.value));
        title.value ='';
        content.value='';
        this.alertarNotaGuardada = !this.alertarNotaGuardada;
        setTimeout(()=>{this.alertarNotaGuardada = !this.alertarNotaGuardada;},tiempoEspera);
        
      return false;
  }

  eliminarNota(notaSeleccionada:Nota)
  {
    this.notas.splice(this.notas.lastIndexOf(notaSeleccionada),1);
    this.alertarNotaEliminada = !this.alertarNotaEliminada;
    setTimeout(() => {
      this.alertarNotaEliminada = !this.alertarNotaEliminada;
    }, tiempoEspera);
  }

}
