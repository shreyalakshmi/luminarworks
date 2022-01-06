var num1=60;
var num2=40;
var limit=0;
let factor=0;
// if(num1>num2){limit=num2;}
// else{limit=num1;}
// let count=1;//to show time of counts
// for(let i=1;i<=limit;i++){
//     if((num1%i==0)&&(num2%i==0)){
//         factor=i;
//         console.log(factor);
//     }
// count++;
// }
// console.log("hcf",factor);
// console.log("count",count);
var i=1;
while(i<=num1){          //1<=60          //using while loop
    if((num1%i==0)&&(num2%i==0)){   //60%1==0, 40%1==0
        factor=i;}    

        i++;   //2
}
console.log(factor);