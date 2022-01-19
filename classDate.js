class myDate {
    constructor(day,month,year) {
        this.day = day;
        this.month= month;
        this.year = year    ;
    };
    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }
    setDay(day){
        this.day = day;
    }
    setMonth(month){
        this.month = month;
    }
    setYear(year){
        this.year = year;
    }
    setDate(day,month,year){
        this.day= day;
        this.month= month;
        this.year=year;
    }
    toString(){
        return this.day + "/" + this.month + '/' + this.year;
    }
}
let date = new myDate();
// date.setYear(2022);
// date.setMonth(10);
// date.setDay(31);
date.setDate(8,11,2018)
// date.toString()

let day= date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(date.toString())