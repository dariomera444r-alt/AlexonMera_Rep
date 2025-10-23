"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(id, nombre, correo) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
    }
    Persona.prototype.obtenerIdentificador = function () {
        return this.nombre + " (" + this.id + ")";
    };
    return Persona;
}());
exports.Persona = Persona;
