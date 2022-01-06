var expenses=[20000,25000,20000,30000,35000,35000]
// var st=new Set();
// for(let amount of expenses){
//     st.add(amount);
// }
// console.log(st);

var unique=[]
for(let amount of expenses){
    if(unique.includes(amount)){
    }
    else{ unique.push(amount)}

}
console.log(unique);

