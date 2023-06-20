export class Persona { 
    nombre:String;
    apellido:String;
    fecha:String;
    valor:number=0;
    constructor(valor:number,nombre:String,apellido:String,fecha:String) {
        this.valor=valor;
        this.nombre=nombre;
        this.apellido=apellido;
        this.fecha=fecha;
    }
}