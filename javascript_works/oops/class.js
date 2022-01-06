class Student{
    // setStudent(name,age,std,divison){
    constructor(name,age,std,divison){     //to initialize instance variables
     this.name=name                //INSTANCE VARIABLES
     this.age=age
     this.std=std
     this.divison=divison
    }
    PrintStudent(){
        console.log(this.name,this.age,this.std,this.divison);
    }
}
var Stu1=new Student("ammu",15,10,"B")                   //can be easily called while using constructor
// Stu1.setStudent("ammu",15,10,"B")           //only when setPerson is used
Stu1.PrintStudent()

var Stu2=new Student("appu",13,8,"A")
// Stu2.setStudent("appu",13,8,"A")
Stu2.PrintStudent()
