"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proyecto_1 = require("./proyecto");
var desarrollador_1 = require("./desarrollador");
var gerente_1 = require("./gerente");
// Composición
var proyectoSGA = new proyecto_1.Proyecto("Sistema de Gestión Académica");
proyectoSGA.agregarTarea("Tarea inicial: Análisis de requerimientos");
// Agregación
var dev1 = new desarrollador_1.Desarrollador(1, "Alexon", "alexonmera444r@gmail.com", proyectoSGA);
var gerente = new gerente_1.Gerente(2, "Dario", "dario@mail.com", proyectoSGA);
proyectoSGA.agregarMiembro(dev1);
proyectoSGA.agregarMiembro(gerente);
// Polimorfismo
dev1.notificar("Se te asignó una nueva tarea.");
gerente.notificar("Revisar avance del proyecto.");
// Mostrar información del proyecto
proyectoSGA.mostrarInfo();
