var num = Math.random();
num = (Math.floor(num*100)) + 1;
console.log("The random number is : "+num+" \n");
var count = 1;
while(i<=100){
    if(num%3===0){
        console.log("Fizz");
        break;
    }else if(num%5===0){
        console.log("Buzz");
        break;
    }else if(num%3===0 && num%5===0){
        console.log("FizzBuzz");
        break;
    }
    i += 1;
    console.log(i);
}