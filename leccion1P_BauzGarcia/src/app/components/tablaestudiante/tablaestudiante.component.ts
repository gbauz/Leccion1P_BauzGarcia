import { Component } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-tablaestudiante',
  templateUrl: './tablaestudiante.component.html',
  styleUrls: ['./tablaestudiante.component.css']
})
export class TablaestudianteComponent {
  ItemsEliminiados: Persona[]=[];

  listEstudiante: Persona[] = [];
  form!: FormGroup;
  totalDonacion: number = 0;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      valor: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha: ['', Validators.required]
    });

  }
  agregarPersona():void {const persona: Persona = {
    valor:this.form.value.valor,
    nombre: this.form.value.nombre,
    apellido: this.form.value.apellido,
    fecha: this.form.value.fecha,

  }

  //agrego a la lista
  this.listEstudiante.push(persona);
  //limpiar el formulario
  this.form.reset();
  this.totalDonacion += persona.valor; 
  }

  eliminarEstudiante(indice:number):void{
    const element =this.listEstudiante.splice(indice,1)[0];
    //this.listEstudiante.splice(indice,1)[0];
    this.ItemsEliminiados.push(element);
    this.totalDonacion -= element.valor;
  }

}
