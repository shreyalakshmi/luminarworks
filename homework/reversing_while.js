var num=123;
var result="";   //3
while(num!=0){  //123!=0   12!=0
    let last=num%10;  //123=3 only 12 left
    result+=last //3                                //result+=last not last+=result
    // num/10;  // 123/10=12.3
    num=Math.floor(num/10)  //12.3 mathfloor=12
}
console.log(result);


//MULTIPLE OF 2
var limit=10;
var num=2;
var i=1;
while(i<=limit){  //1<10
mul=i*num;
console.log(mul);
i++;
}