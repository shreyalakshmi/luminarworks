class Parent {
    bike() {
        console.log("passion pro");
    }
}
class Child extends Parent{
    bike() {
        super.bike()       //to call parent
        console.log("royal enfield");
    }
}
var ch = new Child()
ch.bike()