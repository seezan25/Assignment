//Write a program that swaps the values of two variables.
let a=20;
let b=50;
let temp;

console.log("The value of a before swapping is: "+a);
console.log("The value of b before swapping is: "+b);

let swapping=()=>{
    temp=a;
    a=b;
    b=a;
    console.log("The value of a after swapping is: "+a);
    console.log("The value of b after swapping is: "+b);
}

swapping();