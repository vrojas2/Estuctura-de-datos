export default class Dado {
    lanzardado() {
        return Math.trunc(Math.random()*100+1);
    }
}