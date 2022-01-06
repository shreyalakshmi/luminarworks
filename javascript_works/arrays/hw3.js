var arr = [2, 4, 6]
var sum = 0;
for (let i of arr)//2
{
    sum = sum + i;
}
var op = [];

for (let i of arr) {
    op.push(sum - i)
}

console.log(op);