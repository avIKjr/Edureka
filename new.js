function div(a,b){
    console.log(a/b);
};
div(10,2);
//arrow function examples
//1
var div1 = (x,z) => x+z;
console.log(div1(10,5));

//2
var div2 = (q,w) => {
    return q+w;
}
console.log(div2(10,2));
//default paramiters
 var sum = (i=0,o=0,p=0)=> i+o+p;
 console.log(sum(1,2,3));
 console.log(sum(1,2));
 console.log(sum(1));
 console.log(sum());
 //string breaks
 var name = "Avik";
 var age = 24;
 var height = `5'10''`;
 const str = `Hi my name is ${name},
 and my age is ${age},
  and my height is ${height}`
  console.log(str);
//rest method
var multiply = (b, ...n) =>{
    return b+n.reduce((m,k)=> m+=k);
}
console.log(multiply(1,2,3));
var sum1 = (f,...g)=>{
    let sum1 = 0;
    for(let value of g){
        sum1 = sum1+value
    }
    return sum1+f; // if return sum1    ans is = 5
}
let sum2 = sum1(1,2,3)
console.log(sum2);
//object destructureing
let obj ={
    names:'Avik',
    age1 : 24,
    active: false,
}
let {names,age1,active} = obj;
console.log(names/*.innerhtml='Avi'*/)