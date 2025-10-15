import { empleado } from "./empleado";

export class personalServicio extends empleado {
    seccion: string;

    constructor(nombresC: string, apellidosC: string, identificacionC: number, estadoCivilC: string, añoincorporacionC: number, numeroDespachoC: number, seccionC: string) {
        super(nombresC, apellidosC, identificacionC, estadoCivilC, añoincorporacionC, numeroDespachoC);
        this.seccion = seccionC;
    }
}
