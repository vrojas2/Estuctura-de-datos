import Liebre from "./Corredor.js";
import Carrera from "./Carrera.js";
class Main{
    constructor() {
        let liebre = new Liebre();
        let carrera = new Carrera();
        console.log("Inicia carrera 'tortuga vs liebre'");
        
        while(liebre.posicionTortuga < 90 && liebre.posicionLiebre < 90) {
            liebre.avanzaTortuga(liebre.dado());
            liebre.avanzarLiebre(liebre.dado());
            console.log(liebre.posicionTortuga, liebre.posicionLiebre);
            if(carrera.finalCarrera(liebre.posicionTortuga, liebre.posicionLiebre) == true) {
                console.log(carrera.win(liebre.posicionTortuga, liebre.posicionLiebre));
                if(carrera.draw(liebre.posicionTortuga, liebre.posicionLiebre)==true) {
                    console.log("Empate");
                }
            }
        }
    }
}
let m = new Main();