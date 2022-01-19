class myCircle{
    constructor(radius) {
        this.radius = radius;
    };
    getRadius(){
        return this.radius;
    };
    getArea(){
        return Math.PI * this.radius * this.radius;
    };
}
let circle = new myCircle(8);
let radius = circle.getRadius();
let area = circle.getArea();
alert("radius :" + radius + " -area :" + area);