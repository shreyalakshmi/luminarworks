// var num=30;
//  if(num%3*num%5==0){console.log("fizzbuzz");}
// this condition will be first checked
// else if(num%5==0){console.log("buzz");}
//  else if(num%3==0){console.log("fizz");}

// else if(num%15==0){console.log("fizzbuzz");}

var num=10;
var str=""
if(num%3==0){str+="fizz"}  //checks if divisible by 3, if yes print fizz and next
if(num%5==0){str+="buzz"}  //next checks if divisible by 5 if no, then only print fizz else buzz
console.log(str);          //if divisible by both print fizzbuzz