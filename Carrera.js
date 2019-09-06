export default class Carrera{
    
    win(tortuga, liebre) {
        if(tortuga>liebre) {
            return "Ganador la tortuga";
        }
        else if(tortuga<liebre){
            return "Ganador la liebre";
        }
    }

    draw(tortuga, liebre) {
        if(tortuga==liebre) {
            return true;
        }
        else{
            return false;
        }
    }

    finalCarrera(tortuga, liebre) {
        if(tortuga >=90 || liebre >= 90) {
            return true;
        }
        else{
            return false;
        }
    }
}