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
exports.estudiante = void 0;
var persona_1 = require("./persona");
var estudiante = /** @class */ (function (_super) {
    __extends(estudiante, _super);
    function estudiante(nombresC, apellidosC, identificacionC, estadoCivilC, cursoC) {
        var _this = _super.call(this, nombresC, apellidosC, identificacionC, estadoCivilC) || this;
        _this.curso = cursoC;
        return _this;
    }
    return estudiante;
}(persona_1.persona));
exports.estudiante = estudiante;
