"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proyecto = void 0;
var Proyecto = /** @class */ (function () {
    function Proyecto(nombre) {
        this.nombre = nombre;
        this.tareas = [];
        this.miembros = [];
    }
    Proyecto.prototype.agregarTarea = function (descripcion) {
        this.tareas.push(descripcion);
    };
    Proyecto.prototype.agregarMiembro = function (persona) {
        this.miembros.push(persona);
    };
    Proyecto.prototype.mostrarInfo = function () {
        console.log("📂 Proyecto: " + this.nombre);
        console.log("Miembros:");
        this.miembros.forEach(function (m) {
            console.log("- " + m.obtenerIdentificador() + " (" + m.rol() + ")");
        });
        console.log("Tareas:");
        this.tareas.forEach(function (t) {
            console.log("- " + t);
        });
    };
    return Proyecto;
}());
exports.Proyecto = Proyecto;
