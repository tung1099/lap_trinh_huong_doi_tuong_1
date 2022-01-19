class temperature {
    constructor(doC) {
        this.doC = doC
    }
    getdoC(){
        return this.doC
    }
    convertCtoF(){
        let doF = this.doC * 1.8 +32;
        return doF;
    }
    convertCtoKenvin(){
        let doKenvin = this.doC + 273.15;
        return doKenvin;
    }

}
let doC = new temperature(25);
document.write("25 độ C bằng " + doC.convertCtoF() + " độ F " + " và bằng " + doC.convertCtoKenvin() + " độ Kenvin" )