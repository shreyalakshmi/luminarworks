var dataset = [

    { district: "palakkad", temparature: 30 },
    { district: "tvm", temparature: 31 },
    { district: "palakkad", temparature: 31 },
    { district: "tvm", temparature: 29 },
    { district: "ekm", temparature: 31 },
    { district: "ekm", temparature: 29 }


]
var weather_data = {};
for (let data of dataset) {      // { district: "palakkad", temparature: 30 },   { district: "tvm", temparature: 31 },
    let distName = data.district;   // palakkad  tvm
    let curTemp = data.temparature; //30   31
    if (distName in weather_data) {     //no no
     let oldTemp=weather_data[distName] //palakkad=oldtemp
     if(curTemp>oldTemp){               //
         weather_data[distName]=curTemp;
     }
    }
    else { weather_data[distName] = curTemp }     //if no then palakkad=30  tvm=31
}
console.log(weather_data);
