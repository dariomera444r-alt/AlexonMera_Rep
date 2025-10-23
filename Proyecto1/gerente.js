"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
var persona_1 = require("./persona");
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(id, nombre, correo, proyecto) {
        var _this = _super.call(this, id, nombre, correo) || this;
        _this.proyecto = proyecto;
        return _this;
    }
    Gerente.prototype.notificar = function (mensaje) {
        console.log("📢 [Gerente] " + this.nombre.toUpperCase() + " fue notificado: " + mensaje.toUpperCase());
    };
    Gerente.prototype.rol = function () {
        return "Gerente";
    };
    return Gerente;
}(persona_1.Persona));
exports.Gerente = Gerente;
