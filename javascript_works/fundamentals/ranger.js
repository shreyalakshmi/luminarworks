var num=2;
var low=8;
var upp=30;
for( let i=1;i<=upp;i++){  //1<30
    let res= i**num;       // 1**2=1
    if(res>=low && res<=upp){   //1>8 ,1<30
        console.log(i);
    }

}