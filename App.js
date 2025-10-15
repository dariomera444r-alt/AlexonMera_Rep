"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var empleado_1 = require("./empleado");
var estudiante_1 = require("./estudiante");
var profesor_1 = require("./profesor");
var personalServicio_1 = require("./personalServicio");
//1
var persona2 = new persona_1.persona("Juan", "Pérez", 202020, "Soltero");
//2
var empleado1 = new empleado_1.empleado("Marcos", "Santos", 303030, "Viudo", 2019, 7);
//3
var estudiante1 = new estudiante_1.estudiante("Alexon", "Mera", 505050, "Soltero", "Informática");
//4
var profesor1 = new profesor_1.profesor("Carlos", "Vera", 707070, "Casado", 2018, 12, "Arquitectura");
//5
var personal1 = new personalServicio_1.personalServicio("Marta", "González", 909090, "Divorciada", 2017, 9, "Biblioteca");
//1
console.log(persona2);
//2
console.log(empleado1);
//3
console.log(estudiante1);
//4
console.log(profesor1);
//5
console.log(personal1);
