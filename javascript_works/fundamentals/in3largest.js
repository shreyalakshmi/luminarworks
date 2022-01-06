var num1=5;
var num2=10;
var num3=15;
if((num1>num2)&&(num1>num3)){console.log(` ${num1}`);}
if((num2>num3)&&(num2>num1)){console.log(` ${num2}`);}
if((num3>num2)&&(num3>num1)){console.log(` ${num3}`);}


// here we know num1 is largest therfore only check num2&3
if(num2>num3){console.log(` ${num2}`);}
else{"num3 is second largest"}

if(num1>num3){console.log(` ${num1}`);}
else{"num3 is second largest"}

if(num2>num1){console.log(` ${num2}`);}
else{"num1 is second largest"}

// else  console.log("numbers are equal");

if((num1<num2)&&(num1<num3)){console.log(` ${num1}`);}
if((num2<num3)&&(num2<num1)){console.log(` ${num2}`);}
if((num3<num2)&&(num3<num1)){console.log(` ${num3}`);}



