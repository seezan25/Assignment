//Write a program that takes a string as input and prints it in reverse order.
let str ="I am seezan";
let spliting = str.split(" ");               //converting to array by splitting the string in terms of space
console.log(spliting);
let reversing= spliting.reverse();
console.log(reversing);                      //reversing the array item
let output= reversing.join(" ");
console.log(output);                         //turning the array back to string after reversing and joining them