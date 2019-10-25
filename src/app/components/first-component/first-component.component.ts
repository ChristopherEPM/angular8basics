import { Component } from '@angular/core';

// realizamos binding por interpolación,(interpolar, mostrar un dato, unir propiedad)
@Component({
    selector: 'first-component',
    template: `
        <h1>{{titulo}}</h1>
        <h2>{{year}}</h2>
        <p>{{comentario}}</p>
    `
})

export class FirstComponent{
    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo = "Hello world, I'm the first COMPONENT";
        this.comentario = "This is mi first component";
        this.year = 2020;

        console.log("componente first-component cargado!!");
        console.log(this.titulo, this.comentario, this.year)
    }
}