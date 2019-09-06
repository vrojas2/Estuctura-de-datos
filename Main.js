import Tortuga from "./Corredor.js";
import Carrera from "./Carrera.js";
import Dado from "./Dado.js";

class Main{
    constructor() {
        let dado = new Dado();
        let tortuga = new Tortuga();
        let carrera = new Carrera();
        console.log("Inicia carrera 'tortuga vs liebre'");
        do{
            tortuga.avanzaTortuga(dado.lanzardado());
            tortuga.avanzarLiebre(dado.lanzardado());
            console.log(tortuga.posicionTortuga, tortuga.posicionLiebre);
        }
        while(tortuga.posicionTortuga < 90 && tortuga.posicionLiebre < 90)
        if(carrera.finalCarrera(tortuga.posicionTortuga, tortuga.posicionLiebre) == true) {
            console.log(carrera.win(tortuga.posicionTortuga, tortuga.posicionLiebre));
            if(carrera.draw(tortuga.posicionTortuga, tortuga.posicionLiebre)==true) {
                console.log("Empate");
            }
        }
    }
}
let m = new Main();