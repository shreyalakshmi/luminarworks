var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"market",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010]

]
// var max=0;
var developer=[];
for(let employee of employees)
{
    if(employee[4]>2009 &&employee[5]<2016){
        console.log(employee);
    }                                         //employees who where working in perios of 2010 to 2015



    // console.log(employee[1]);       //print names

//     if(employee[3]=="developer"){
//         developer.push(employee)
//  }                                      //highest aming deve


    

        // if((employee[5]-employee[4])>10)
        // {console.log(employee);}

        // if(employee[2]<max)       
        // max=employee[2]                              // min salary

        // if(employee[1][0]=="a"){
        // console.log(employee);}       // starting with a

}
// developer.sort((d1,d2)=>d1[2]-d2[2])
// console.log(developer[0][2]); 


// console.log(employees.length);               //no of employees

// console.log(max);
  

// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[1][2]);                //to print second highest
// console.log(employees[employees.length-1][2]);


//heighedt second salary