var students=[
    [1000,"akhil","mearnstack",145,"mca"],
    [1001,"anu","mearnstack",165,"bca"],
    [1002,"nikhil","django",175,"bca"],
    [1003,"vijil","django",165,"mca"],
    [1004,"tim","testing",185,"bca"],
    [1005,"john","testing",155,"mca"]

]
var max=0;
for(let student of students){
    // console.log(student[1]);
    // if(student[2]=="mearnstack"){    console.log(student);

    // }
    // if(student[3]>160){console.log(student);}
    // if(student[2]=="django")
    //     if(student[3]>168){console.log(student[1]);}
    
if(student[3]>max){
    max=student[3] 

}
}
console.log(max);


