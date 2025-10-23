import { Proyecto } from './proyecto';
import { Desarrollador } from './desarrollador';
import { Gerente } from './gerente';

// Composición
const proyectoSGA = new Proyecto("Sistema de Gestión Académica");
proyectoSGA.agregarTarea("Tarea inicial: Análisis de requerimientos");

// Agregación
const dev1 = new Desarrollador(1, "Alexon", "alexonmera444r@gmail.com", proyectoSGA);
const gerente = new Gerente(2, "Dario", "dario@mail.com", proyectoSGA);

proyectoSGA.agregarMiembro(dev1);
proyectoSGA.agregarMiembro(gerente);

// Polimorfismo
dev1.notificar("Se te asignó una nueva tarea.");
gerente.notificar("Revisar avance del proyecto.");

// Mostrar información del proyecto
proyectoSGA.mostrarInfo();