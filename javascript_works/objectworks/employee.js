var employee={
    eid:1000,
    ename:"tom",
    salary:25000,
    designation:"developer",
    exp:1
}
// console.log(employee.designation);
employee.experience=2
// console.log(employee);
if("exp" in employee){
    employee.exp+=1;
}
else{ employee.exp=1;}
console.log(employee);