const ar = [1,2,3,4,5,6,7,8,9];
console.log(ar);
//push
ar.push(10);
console.log(ar);
//unshift
ar.unshift(0);
console.log(ar);
//pop
ar.pop();
console.log(ar);
//shift
ar.shift();
console.log(ar);
//map method
function begin(ar){
    return ar*10
}
let finnal = ar.map(begin);
console.log(finnal);
//for each
function forr(element){
    console.log(element)
}
ar.forEach(forr);
    //or
const arr = [1,2,3,4,5,6,7,8,9];
arr.forEach((i,index) => {
    document.write( "index:"+ index +"value:"+ i+ "<br/>")
});
//filter method
function fil(arr){
    return arr % 2 != 0
}
let result = arr.filter(fil);
console.log(result);

console.log(arr.filter(fil))

console.log(arr.filter(iii=>iii>=2));
//find method
function fil(arr){
    return arr % 2 != 0
}
let resultt = arr.find(fil);
console.log(resultt);
console.log(arr.find(fil))

var a=[17,20,25];
console.log(a.find(age=>age>18));
//reduce method
function sumall(plus,element){
    return plus+element
}
let sum = arr.reduce(sumall);
console.log(sum)

let ans = (a,b) => {
    return a+b
}
let ansss = arr.reduce(ans);
console.log(ansss)
//sort method
var x =[3,6,8,9,0,2,1,5,4];
function sorti(i,j){
   // return i-j //assending
   return j-i  //desending
}
var done = x.sort(sorti);
console.log(done)
console.log(x.sort((i,j) => {return i-j}))

var y = ['a','g','t','r']
var don = y.sort()
console.log(don)
console.log(y.sort())
//index of method
console.log(x.indexOf(9))


var d = x.indexOf(1);
console.log(d);
//concat method
let ary = x.concat(y,ar);
console.log (ary)
console.log(x.concat(y))
//is array method
console.log(Array.isArray('a')); //false
console.log(Array.isArray(ary)); //true
//slice method
let xyz = ary.slice(0, 6);
console.log(xyz);

console.log(ary.slice(7,20));
//splice method
var yy= [1,3,4,5,6]
yy.splice(1,0,2)
console.log(yy)
y.splice(1,1,'b')
console.log(y)
//length method
console.log(ary.length)


