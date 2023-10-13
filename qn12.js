// Write a program that checks if a given number is a prime number and prints the result.

let n=11;
if(n==1){
    console.log("1 is not a prime number");
}
else if(n==2){
    console.log("It is prime number");
}

else if(n>1){
    for(i=2;i<n;i++){
        if(n%i!=0){
            console.log("It is a prime number");
        }
        else{
            console.log("It is not a prime number");
        }
        break;
    }
    
}

