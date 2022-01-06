var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]
//no,district,+vecases,deathrate,recovery,1stdose,2nddose
 

var maxpositive=covid_data.reduce((cd1,cd2)=>cd1[2]>cd2[2]?cd1:cd2)[1]
// console.log(maxpositive);
// q1 higest test + ve case district



var maxfirstdose=covid_data.reduce((cd1,cd2)=>cd1[5]>cd2[5]?cd1:cd2)[5]
// console.log(maxfirstdose);
var greendistrict=covid_data.filter((cd=>cd[5]==maxfirstdose))
// console.log(greendistrict);
// q2 district with higest 1 dose vaccination rate




var mindeath=covid_data.reduce((cd1,cd2)=>cd1[3]<cd2[3]?cd1:cd2)[1]
// console.log(mindeath);
// q3 district with lowest death cases


var positive=covid_data.sort((cd1,cd2)=>cd1[2]-cd2[2])
// console.log(positive);
// q4 sort district with +ve cases



var firstdose=covid_data.sort((cd1,cd2)=>cd1[5]-cd2[5])
// console.log(firstdose);
// q5 sort the districts based on 1st dose


var greaterthan=covid_data.filter((cd=>cd[2]>=60000))
// console.log(greaterthan);
// q6 is there any states with +ve cases > 60000


var thrissur=covid_data.filter((cd=>cd[1]=="thrissur"))
// console.log(thrissur);
// q7 print trissur details


var sum=covid_data.map(cd=>cd[2]).reduce((cd1,cd2)=>cd1+cd2)     
// console.log(sum);
// q8 total number of +ve cases


var cured=covid_data.map(cd=>cd[4]).reduce((cd1,cd2)=>cd1+cd2)     //error
// console.log(cured);
// q9 total number of cured cases


// var idukki=covid_data.filter(cd=>cd[1]=="iduky").map(cd=>cd[4])
var idukki=covid_data.find(cd=>cd[1]=="iduky")[4]
console.log(idukki);
// q10 cured numbers of iduky


var death=covid_data.map(cd=>cd[3]).reduce((cd1,cd2)=>cd1+cd2)                   
// console.log(death);
// q11 total number of death cases
