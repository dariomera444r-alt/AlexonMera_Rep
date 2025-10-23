import { Persona } from './persona';

export class Proyecto {
    nombre: string;
    tareas: string[];
    miembros: Persona[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.tareas = [];
        this.miembros = [];
    }

    agregarTarea(descripcion: string) {
        this.tareas.push(descripcion);
    }

    agregarMiembro(persona: Persona) {
        this.miembros.push(persona);
    }

    mostrarInfo() {
        console.log("📂 Proyecto: " + this.nombre);
        console.log("Miembros:");
        this.miembros.forEach(m => {
            console.log("- " + m.obtenerIdentificador() + " (" + m.rol() + ")");
        });
        console.log("Tareas:");
        this.tareas.forEach(t => {
            console.log("- " + t);
        });
    }
}
