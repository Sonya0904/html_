function showMessaage(from,text){
    alert(from +','+text);
}
showMessaage('Hello',)

// function sum(a,b){
//     return a+b;
// }

const sayHi = function(){
    console.log("Hello");
};
sayHi();

const generateSumFinder =()=>{
    const sum = (a,b) => a+b;
    return sum;
};

const sum = generateSumFinder();
sum(1,5);

// button.onclick = function(){
//     console.log("two seconde late");
// }, 2000;

const square = x => x*x;
console.log(square(5));

// let meName="Sonya"
// function showName(meName){
//    console.log(meName);
// };


let name="Sonya"
function showName(name){
    alert(name);
};

showName(name);

let a=1;
let b=3;
let c=2;
const Sum =()=>{
    return a+b+c;
};
alert(Sum(a,b,c));

const square2 = a => a*a;
console.log(square2(10));

const newHi=()=> console.log("hi");
