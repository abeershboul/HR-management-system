'use strict'
var Id=999;

const Employee1={
    EmployeeID:1000,
    fullName:"Ghazi Samer",
    Department :"Administration",
    "Image URL":"https://cute1.cc/wp-content/uploads/2016/08/20160819-3487.jpg",
    Level:"Senior",
    uniqueId: function (){
           let S = Id++;
            this.EmployeeID=S;

        },
        getRandomSenior: function(min, max) {
            let salary= Math.floor(Math.random() * (max - min) + min);
            let netSalary=salary-(salary*0.075);
            console.log(salary);
           // console.log(netSalary);
          }
};
function r(){
    const val = Math.floor(1000 + Math.random() * 9000);

Employee1.EmployeeID=val;
}
r();


const Employee2={
    EmployeeID:1001,
    fullName:"Lana Ali",
    Department :"Finance",
    "Image URL":"https://mrahkat.net/wp-content/uploads/2019/12/6954-3.jpg",
    Level:"Senior",
    uniqueId: function (){
        var count;
        console.count();
        } ,
    getRandomSenior: function(min, max) {
        let salary= Math.floor(Math.random() * (max - min) + min);
        let netSalary=salary-(salary*0.075);
            console.log(salary);
            //console.log(netSalary);        
        }
};
function s(){
    const val = Math.floor(1000 + Math.random() * 9000);

Employee2.EmployeeID=val;
}
s();

const Employee3={
    EmployeeID:1002,
    fullName:"Tamara Ayoub",
    Department :"Marketing",
    "Image URL":"https://new3.co/wp-content/uploads/2018/01/1883-6.jpg",
    Level:"Senior",
    uniqueId: function (){
        var count;
        console.count();
        },
    getRandomSenior: function(min, max) {
        let salary= Math.floor(Math.random() * (max - min) + min);
        let netSalary=salary-(salary*0.075);
        console.log(salary);
        //console.log(netSalary);        
    } 
};
function b(){
    const val = Math.floor(1000 + Math.random() * 9000);
Employee3.EmployeeID=val;
}
b();

const Employee4={
    EmployeeID:1003,
    fullName:"Safi Walid",
    Department :"Administration",
    Level:"Mid-Senior",
    "Image URL":"https://eveningg.cc/wp-content/uploads/2019/06/11450-6.jpg",
    uniqueId: function (){
        var count;
        console.count();
        } ,

        getRandomMidSenior: function(min, max) {
            let salary= Math.floor(Math.random() * (max - min) + min);
            let netSalary=salary-(salary*0.075);
            console.log(salary);
            //console.log(netSalary);        
          }
};
function c(){
    const val = Math.floor(1000 + Math.random() * 9000);
Employee4.EmployeeID=val;
}
c();

const Employee5={
    EmployeeID:1004,
    fullName:"Omar Zaid",
    Department :"Development",
    "Image URL":"https://www.nawa3em.com/big/romance10-17-8-2014.jpg",
    Level:"Senior",
    uniqueId: function (){
        var count;
        console.count();
        } 

        ,

    getRandomSenior: function(min, max) {
        let salary= Math.floor(Math.random() * (max - min) + min);
        let netSalary=salary-(salary*0.075);
        console.log(salary);
       // console.log(netSalary);        
      }
};

function f(){
    const val = Math.floor(1000 + Math.random() * 9000);
Employee5.EmployeeID=val;
}
f();
const Employee6={
    EmployeeID:1005,
    fullName:"Rana Saleh",
    Department :"Development",
    "Image URL":"https://mrahkat.net/wp-content/uploads/2019/12/6954-6.jpg",
    Level:"junior",
    uniqueId: function (){
        var count;
        console.count();
        } ,

        getRandomjunior: function(min, max) {
            let salary= Math.floor(Math.random() * (max - min) + min);
            let netSalary=salary-(salary*.075);
            console.log(salary);
            //console.log(netSalary);  
         }   
};
function g(){
    const val = Math.floor(1000 + Math.random() * 9000);
Employee6.EmployeeID=val;
}
g();

const Employee7={
    EmployeeID:1006,
    fullName:"Hadi Ahmad",
    Department :"Finance",
    Level:"Mid-Senior",
    "Image URL":"https://media.linkonlineworld.com/img/large/2017/11/18/2017_11_18_13_38_40_513.jpg",
    uniqueId: function (){
        var count;
        console.count();
        } ,

        getRandomMidSenior: function(min, max) {
            let salary= Math.floor(Math.random() * (max - min) + min);
            let netSalary=salary-(salary*0.075);
            console.log(salary);
            //console.log(netSalary);       
          }
    
};
function l(){
    const val = Math.floor(1000 + Math.random() * 9000);
Employee7.EmployeeID=val;
}
l();

 var Array=[Employee1,Employee2,Employee3,Employee4,Employee5,Employee6,Employee7];



      function salary(){
        for(let i=0; i<Array.length;i++){
            
            if(Array[i]["Level"] === "Senior"){
                console.log(Array[i]["fullName"]);
                Array[i]["getRandomSenior"](1500,2000);
            
        }else if(Array[i]["Level"]==="Mid-Senior"){
            console.log(Array[i]["fullName"]);
            Array[i]["getRandomMidSenior"](1000,1500);

        }else if(Array[i]["Level"]==="junior"){
            console.log(Array[i]["fullName"]);
            Array[i]["getRandomjunior"](500,1000);
        }
      }}

      
      salary();
      
 

