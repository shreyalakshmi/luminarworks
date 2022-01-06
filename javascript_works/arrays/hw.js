var arr1 = [10, 11, 20, 21]
var arr2 = [11, 12, 20, 21]//common elements 11,20,21
var count = 0;
var array = [];
// for (i = 0; i < arr1.length; i++) {
//     for (j = 0; j < arr2.length; j++) {//11 
//         if (arr1[i] == arr2[j]) {//11==10 
//             array.push(arr1[i]);}
//     }
// }
// console.log(array);
// count++;
// console.log(count);
let p1 = 0, p2 = 0;
while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
        console.log("common element",arr1[p1]);
        p1++;
        p2++;
    }
    else if (arr1[p1]<arr2[p2]){
        p1++;
    }
    else if(arr1[p1]>arr2[p2]){
        p2++;
    }
    count++;}
console.log(count);





