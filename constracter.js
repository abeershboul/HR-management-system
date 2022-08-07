'use strict';
let Id =999;
const body = document.getElementsByClassName('body1');


const arr =[];

function EmployeeInfo(EmployeeId,Name,Department,imge,Level,salary){
this.Name=Name;
this.EmployeeId=EmployeeId;
this.Department=Department;
this.Level=Level;
this.imge=imge;
this.salary=salary;

this.uniqueId=function (counter){
           
    this.EmployeeId=counter+1;
  
++Id;
};
this.getRandomsalary=function(max,min) {
    let salary= Math.floor(Math.random() * (max - min) + min);
    let netSalary=salary-(salary*0.075);
    this.salary=netSalary;
    
    //console.log("Employee Name  "+this.fullName)
    //console.log("salary   "+salary);
   
  };



arr.push(this);


};
//console.log(arr);



EmployeeInfo.prototype.render= function(){



  const divel = document.getElementsByClassName('cardcontant');

//body[0].appendChild(divel);
const dive0l = document.getElementsByClassName('card');

const imgel = document.createElement('img');
imgel.src=this.imge;
divel[0].appendChild(imgel);
imgel.style.width='200px'
imgel.style.flexDirection="row";


const p1 = document.createElement('p');

p1.textContent=`Employee Name : ${this.Name}-ID: ${this.EmployeeId}`;
divel[0].appendChild(p1);
//p1.style.display="flex";
p1.style.flexDirection="row";


const p2 = document.createElement('p');
p2.textContent=`Deparatment: ${this.Department} -Level: ${this.Level}`;
divel[0].appendChild(p2);
p1.style.color="white";
p2.style.color="white";
p2.style.flexDirection="row";

divel[0].style.backgroundColor="green";



};









let Employee1 = new EmployeeInfo(1000,"Ghazi Samer","Administration","./assests/Ghazi.jpg","Senior",0);
let Employee2= new EmployeeInfo(1001,"Lana Ali","Finance","./assests/Lana.jpg","Senior",2000);
let Employee3=new EmployeeInfo(1002,"Tamara Ayoub","Marketing","./assests/Tamara.jpg","Senior",2000);
let Employee4= new EmployeeInfo(1003,"Safi Walid","Administration","./assests/Safi.jpg","Mid-Senior",1500);
let Employee5= new EmployeeInfo(1004,"Omar Zaid","Development","./assests/Omar.jpg","Senior",2000);
let Employee6= new EmployeeInfo(1005,"Rana Saleh","Development","./assests/Rana.jpg","junior",1000);
let Employee7= new EmployeeInfo(1006,"Hadi Ahmad","Finance","./assests/Hadi.jpg","Mid-Senior",1500);

Employee1.uniqueId(Id);
Employee1.getRandomsalary(2000,1500);
Employee2.uniqueId(Id);
Employee2.getRandomsalary(2000,1500);
Employee3.uniqueId(Id);
Employee3.getRandomsalary(2000,1500);
Employee4.uniqueId(Id);
Employee4.getRandomsalary(1500,1000);
Employee5.uniqueId(Id);
Employee5.getRandomsalary(2000,1500);
Employee6.uniqueId(Id);
Employee6.getRandomsalary(1000,500);
Employee7.uniqueId(Id);
Employee7.getRandomsalary(1500,1000);






Employee1.render();
Employee2.render();
Employee3.render();
Employee4.render();
Employee5.render();
Employee6.render();
Employee7.render();