import { Persona } from './persona';
import { Proyecto } from './proyecto';

export class Gerente extends Persona {
    proyecto?: Proyecto;

    constructor(id: number, nombre: string, correo: string, proyecto?: Proyecto) {
        super(id, nombre, correo);
        this.proyecto = proyecto;
    }

    notificar(mensaje: string): void {
        console.log("📢 [Gerente] " + this.nombre.toUpperCase() + " fue notificado: " + mensaje.toUpperCase());
    }

    rol(): string {
        return "Gerente";
    }
}