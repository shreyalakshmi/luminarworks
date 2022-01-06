var no1=80;
var no2=20;
if(no1>no2){
    console.log(`number ${no1} is largest`);
}
else if(no2>no1){console.log(`number ${no2} is largest`);}    //first comes else if() then else{} for 3 conditions
//what if both numbers are same
else{console.log(`numbers are equal , number is ${no1}`);}



//by using TERINARY OPERATOR
console.log(no1>=no2?no1:no2);