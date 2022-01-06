var num1=10,num2=20;
console.log(`numbers before swapping num1=${num1} num2=${num2}`)

temp=num1;
num1=num2;
num2=temp;
console.log(`numbers after swapping num1=${num1} num2=${num2}`)

num1=num1+num2;//30
num2=num1-num2;//10
num1=num1-num2;//20
