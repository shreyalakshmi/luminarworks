for (let i = 1; i <= 4; i++) {
    let str = " ";
    for (let space = 1; space <= (4 - i); space++) {
        str += " ";
    }
    for (let col = 1; col <= i; col++) {
        str += "* ";
    }
    console.log(str);
}