var num = Math.random();
num = (Math.floor(num*100)) + 1;
console.log("The random number is : "+num+" \n");
if(num%3===0){
    console.log("Fizz");
}else if(num%5===0){
    console.log("Buzz");
}else if(num%3===0 && num%5===0){
    console.log("FizzBuzz");
}
