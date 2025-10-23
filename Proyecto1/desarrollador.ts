import { Persona } from './persona';
import { Proyecto } from './proyecto';

export class Desarrollador extends Persona {
    proyecto?: Proyecto;

    constructor(id: number, nombre: string, correo: string, proyecto?: Proyecto) {
        super(id, nombre, correo);
        this.proyecto = proyecto;
    }

    notificar(mensaje: string): void {
        console.log("📩 [Desarrollador] " + this.nombre + " recibió: " + mensaje);
    }

    rol(): string {
        return "Desarrollador";
    }
}
