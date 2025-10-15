export class persona {
    nombres: string;
    apellidos: string;
    identificacion: number;
    estadoCivil: string;

    constructor(nombresC: string, apellidosC: string, identificacionC: number, estadoCivilC: string) {
        this.nombres = nombresC;
        this.apellidos = apellidosC;
        this.identificacion = identificacionC;
        this.estadoCivil = estadoCivilC;
    }
}
