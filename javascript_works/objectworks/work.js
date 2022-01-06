var employees={
    eid:1000,
    ename:"ram",
    designation:"developer",
}
// console.log(employees.designation);
// console.log(employees.eid);
// employees.experience=3
// employees.country="india"
// console.log(employees);
if("experience" in employees){
    employees.experience+=1
}
else{
    employees.experience=1
}
console.log(employees);