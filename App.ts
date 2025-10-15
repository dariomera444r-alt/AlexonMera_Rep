import { persona } from "./persona";
import { empleado } from "./empleado";
import { estudiante } from "./estudiante";
import { profesor } from "./profesor";
import { personalServicio } from "./personalServicio";


//1
const persona2 = new persona("Juan", "Pérez", 202020, "Soltero");
//2
const empleado1 = new empleado("Marcos", "Santos", 303030, "Viudo", 2019, 7);
//3
const estudiante1 = new estudiante("Alexon", "Mera", 505050, "Soltero", "Informática");
//4
const profesor1 = new profesor("Carlos", "Vera", 707070, "Casado", 2018, 12, "Arquitectura");
//5
const personal1 = new personalServicio("Marta", "González", 909090, "Divorciada", 2017, 9, "Biblioteca");

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
