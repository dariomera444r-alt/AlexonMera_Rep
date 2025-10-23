import { Notificable } from './notificable';
import { Identificable } from './identificable';

export abstract class Persona implements Notificable, Identificable {
    id: number;
    nombre: string;
    correo: string;

    constructor(id: number, nombre: string, correo: string) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
    }

    abstract notificar(mensaje: string): void;
    abstract rol(): string;

    obtenerIdentificador(): string {
        return this.nombre + " (" + this.id + ")";
    }
}
