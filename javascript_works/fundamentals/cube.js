var num=123;
var sum=0;
while(num!=0)//123!=0 , 12!=0 , 1!=0 , 0!=0
{
    let last_digit=num%10;//3 , 2 , 1   //only get the last num
 sum+=last_digit**3;//27 , 8 , 1
    num=Math.floor(num/10);//12.3=12 , 1.2=1 , 0.1=0
}
console.log(sum);