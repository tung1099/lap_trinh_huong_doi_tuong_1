// // c1: function
// let Rectangle = function(height,width){
//     // thuoc tinh
//     this.height = height;
//     this.width = width;
//
//     //hanh vi
//     // tinh dien tich
//     this.getS = function (){
//         return this.width *this.height;
//     }
//     // tinh chu vi
//     this.getP = function (){
//         return(this.width + this.height) *2;
//     }
// }
// // c2. Dung tu khoa class
class Rectangle{
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }
    getS(){
        return this.height * this.width;
    }
    getP(){
        return (this.height + this.width)*2;
    }
    drawRactangle(x,y){
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.fillRect(x,y,this.width,this.height);
        ctx.fill();
    }
}
let rectangle1= new Rectangle(200,300);
alert( "chu vi là = " + rectangle1.getP());
alert("diện tích là = " + rectangle1.getS());
rectangle1.drawRactangle(50,50);