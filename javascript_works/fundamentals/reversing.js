var num=123;
var res="";
while(num!=0)//123!=0 , 12!=0 1!=0 0!=0
{
let last_digit=num%10;//3 , 2 , 1
res+=last_digit//3 , 2 , 1
num=Math.floor(num/10);//12.3=12=num , 12/10=1.2=1 , 1/10=0.1=0

}
console.log(res);