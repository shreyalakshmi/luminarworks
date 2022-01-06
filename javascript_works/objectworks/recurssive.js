var text = "ABABBC"
var rc = {};
var op=[];
for (let char of text)   //ABABBC 
{
    // console.log(word);
    if (char in rc) {     //word='A' B
        console.log("first recursive char is", char);   //A 
        break

    }
    else {
        rc[char] = 1              //A in rc , B
    }
}


text.split("").map(char=>char in rc? op.push(char):rc[char]=1)
console.log(op[0]);
