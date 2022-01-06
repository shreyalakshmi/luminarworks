var arr = [10, 11, 12, 15, 16] //15 exist or not
var num = 15;
var flag = 0;
for (let no of arr) {
    if (num == no) {
        // console.log("exist")
        // flag++;
        flag = 1;
        break
    }
}
console.log(flag == 0 ? "do not exist" : "exist");
//  { console.log("do not exist"); }


