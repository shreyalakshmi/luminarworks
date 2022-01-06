var arr=[2,3,4,5,6]
var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum);


var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);

var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);