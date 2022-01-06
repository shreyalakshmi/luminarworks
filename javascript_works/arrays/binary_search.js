var arr = [2, 3, 6, 8, 9, 10, 12]
arr.sort((n1, n2) => n1 - n2);
var element = 1;
var flag = 0;
var low = 0, upp = arr.length - 1;
while (low <= upp) {                //0<=6 true
    let mid = Math.floor((low + upp) / 2);      //0+6/2=3
    if (element == arr[mid]) {                 //1==3 false 
        flag = 1;
        break;
    }
    else if (element > arr[mid]) {             //1>3 false
        low = mid + 1;
    }
    else if (element < arr[mid]) {             //1<3 true
        upp = mid - 1;                         //upp=mid-1=2
    }
}
console.log(flag == 0 ? "not found" : "found");