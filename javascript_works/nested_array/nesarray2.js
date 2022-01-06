var mobiles = [
    [1000, "samsung", "samsung f41", 15000, "snapdragon", "AMOLED", "4g"],
    [1001, "samsung", "samsung A51", 32000, "snapdragon", "AMOLED", "5g"],
    [1002, "redmi", "note 10 pro", 19000, "snapdragon", "LED", "4g"],
    [1003, "redmi", "mi 11 lite", 30000, "mediatek", "LED", "4g"],
    [1000, "apple", "12 pro", 72000, "snapdragon", "AMOLED", "4g"],
    [1001, "apple", "12 pro max", 100000, "snapdragon", "AMOLED", "5g"],
    [1002, "oneplus", "nord 2", 29000, "snapdragon", "LED", "4g"],
    [1003, "oneplus", "nord 2", 15000, "mediatek", "LED", "4g"],
]
// var snap = [];
// for (let mobile of mobiles) {
// mobiles.sort((m1,m2)=>m2[3]-m1[3])

// console.log(mobiles[0][1]);          //costly mobile

// if (mobile[4] == "snapdragon")           //to print snapdragon processor
//     if (mobile[6] == "5g") {
//         snap.push(mobile)
//     }                     //costly mobile with snapdragon and 5g



// console.log(mobile[3]<20000?"true":"false");            //mobile less than 10000
//     break

// if(mobile[2]=="samsung A51"){8*28*

//     console.log(mobile);                 //samsung 

// }


// }

// snap.sort((m1, m2) => m2[3] - m1[3])
// console.log(snap[0]);        



// var mob_names=mobiles.map(mob=>mob[2])
// console.log(mob_names);


var mob_price=mobiles.map(mob=>mob[3])
console.log(mob_price);


// var mob_brand = mobiles.filter(mob => mob[1] == "samsung")
// console.log(mob_brand);                                                    //map method

// var less_than =mobiles.filter(mob=>mob[3]<25000).map(mob=>[mob[2],mob[3]])
// console.log(less_than);

// var range=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000)
// console.log(range);

// var varient=mobiles.filter(mob=>mob[6]=="5g").map(mob=>mob[2])
// console.log(varient);                                 //5g mobile names


var varient=mobiles.filter(mob=>mob[6]=="5g"&& mob[3]<=100000 )
// console.log(varient);                                //5g mob less than 100000



// var varient=mobiles.filter(mob=>mob[6]=="4g" && mob[5]=="AMOLED" && mob[1]=="samsung")
// console.log(varient);                                  //4g samsung mob with amoled                 //filter method




// var max=mobiles.reduce((m1,m2)=>m1[3]>m2[3]?m1:m2)
// console.log(max);


// var min=mobiles.reduceRight((m1,m2)=>m1[3]<m2[3]?m1:m2)[3]
// console.log(min);
// var costly=mobiles.filter(mob=>mob[3]==min)
// console.log(costly);                                               //reduce method


var at10=mobiles.some(mob=>mob[3]==10000)
// console.log(at10);

// var avl10=mobiles.some(mob=>mob[3]>=10000 && mob[3]>=25000)
// console.log(avl10);                                                        //some method



var first=mobiles.find(mob=>mob[0]==1000)
// console.log(first);                                                       //find method


