import { persona } from "./persona";

export class empleado extends persona {
    añoincorporacion: number;
    numeroDespacho: number;

    constructor(nombresC: string, apellidosC: string, identificacionC: number, estadoCivilC: string, añoincorporacionC: number, numeroDespachoC: number) {
        super(nombresC, apellidosC, identificacionC, estadoCivilC);
        this.añoincorporacion = añoincorporacionC;
        this.numeroDespacho = numeroDespachoC;
    }
}
