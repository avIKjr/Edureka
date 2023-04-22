//constractor method
class shape {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}
var square = new shape(10,10);
var rect = new shape(20,40);
console.log(square);
console.log(rect);
console.log(square.height);
console.log(rect['width'])
//inheritance

let f  = {
    have : 'i-phone'
}
let p = {
    own : 'one-plus'
}
p.__proto__= f;
console.log(p.own)
console.log(p.have)

//Date
var d = new Date();
console.log(d)

var d1 = new Date(1998, 11, 20, 11, 30, 10);
console.log(d1)

var d2 = new Date("october 13, 2022 10:30:00");
console.log(d2)

var d3 = new Date(100000000000000);
console.log(d3)

console.log(d.getDate())
console.log(d.getDay())
console.log(d.getFullYear())
console.log(d.getHours())
console.log(d.getMilliseconds())
console.log(d.getMinutes())
console.log(d.getMonth())
console.log(d.getSeconds())
console.log(d.getTime())

//math
var x = 4;
console.log(Math.PI)
console.log(Math.pow(x, 3));
console.log(Math.sqrt(x));
console.log(Math.random())

//calculating the area of an circle whose radious is 4
console.log((Math.PI)*(Math.pow(x,2)));



