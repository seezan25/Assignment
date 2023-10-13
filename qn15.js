//Write a program that finds and prints the largest element in an array.
var arr= new Array(2,8,9,2,4);
for(i=0;i<arr.length;i++){
    if(arr[i]>arr[0]){
        arr[0]=arr[i]
    }
}
console.log(arr[0]);