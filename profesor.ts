import { empleado } from "./empleado";

export class profesor extends empleado {
    departamento: string;

    constructor(nombresC: string, apellidosC: string, identificacionC: number, estadoCivilC: string, añoincorporacionC: number, numeroDespachoC: number, departamentoC: string) {
        super(nombresC, apellidosC, identificacionC, estadoCivilC, añoincorporacionC, numeroDespachoC);
        this.departamento = departamentoC;
    }
}
