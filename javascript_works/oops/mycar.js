//PROTOTYPE INHERITANCE

var innova={
    color:["white, black, grey"],
    varient:["petrol"],
    manufacture:["toyota"],
    price:["6lack"],
    getPrice(){
        return this.price              // this.price= currently pointing price
    }

}
var swift={
    color:["black, red, white"],
    manufacute:["maruti"]
}

swift.__proto__=innova              //to inherit from innova 

// console.log(swift.price);
console.log(swift.getPrice());