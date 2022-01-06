var arr = [2,3,4,5]//4,2
var sum = 8;
var count=0;
var flag = 0; 
var upp = arr.length - 1, low = 0; //index no
while (low < upp) {                    //0<3
    let cur_sum = arr[low] + arr[upp]//cur_sum=2+5=7
    //case 1
    if (sum == cur_sum) {//true 8==7
        console.log(`pairs ${arr[low]},${arr[upp]}`);//[2,5]
        flag++;//thus a pair exist
        break
    }
    //case2
    else if (cur_sum < sum) { low += 1; }
    else if (cur_sum > sum) { upp -= 1; }

}
if(flag==0){
    console.log(`no pair`);//thus no pair
}
count++;
 console.log(count);


// for(let i of arr){
//     for(let j of arr){ 
//         console.log(no,j);  
//          if((i+j)==sum){console.log(`pairs ${no},${j}`);}
//         }
