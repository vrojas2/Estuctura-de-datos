class Corredor {
    constructor(posicionTortuga=0, posicionLiebre=0) {
        this._posicionTortuga = posicionTortuga;
        this._posicionLiebre = posicionLiebre;
    }

    get posicionTortuga() {
        return this._posicionTortuga;
    }

    get posicionLiebre() {
        return this._posicionLiebre;
    }

    dado() {
        return Math.floor(Math.random() * 100 + 1);
    }
}

class Liebre extends Corredor {
    constructor(posicionTortuga, posicionLiebre) {
        super(posicionTortuga, posicionLiebre);
    }

    avanzarLiebre(dado) {
        if (dado >= 0 && dado <= 20) {
            this._posicionLiebre +=0;
        }
        else if (dado >= 21 && dado <= 40) {
            this._posicionLiebre +=9;
        }
        else if (dado >= 41 && dado <= 50) {
            this._posicionLiebre -=12;
        }
        else if (dado >= 51 && dado <= 85) {
            this._posicionLiebre +=1;
        }
        else if (dado >= 86 && dado <= 100) {
            this._posicionLiebre -=2;
        }
    }
}

export default class Tortuga extends Liebre {
    constructor(posicionTortuga, posicionLiebre) {
        super(posicionTortuga, posicionLiebre);
    }

   
    avanzaTortuga(dado) {
        if (dado >= 0 && dado <= 50) {
            this._posicionTortuga += 3;
        }
        else if (dado >= 51 && dado <= 70) {
            this._posicionTortuga -= 6;
        }
        else if (dado >= 71 && dado <= 100) {
            this._posicionTortuga += 1;
        }
    }
}
