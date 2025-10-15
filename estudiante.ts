import { persona } from "./persona";

export class estudiante extends persona {
    curso: string;

    constructor(nombresC: string, apellidosC: string, identificacionC: number, estadoCivilC: string, cursoC: string) {
        super(nombresC, apellidosC, identificacionC, estadoCivilC);
        this.curso = cursoC;
    }
}
