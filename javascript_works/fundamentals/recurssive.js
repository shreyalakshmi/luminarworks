var pattern="ABACC"
var op=[];
for(let letter of pattern){
    if(op.includes(letter)){
        console.log(letter,"reccurssive");
    }
    else(op.push(letter));
}