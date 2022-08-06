'use strict';
let Id =999;
const body = document.getElementsByName('body');


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



const divel = document.createElement('div');
body[0].appendChild(divel);

const imgel = document.createElement('img');
imgel.src=this.imge;
divel[0].appendChild(imgel);

const p1 = document.createElement('p');

p1.textContent=`Employee Name : ${this.Name}-ID: ${this.EmployeeId}`;
divel[0].appendChild(p1);

const p2 = document.createElement('p');
p2.textContent=`Dep2ratment: ${this.Department} -Level: ${this.Level}`;
divel[0].appendChild(p2);

divel[0].style.backgroundColor="green";


};









let Employee1 = new EmployeeInfo(1000,"Ghazi Samer","Administration","/home/abeer/HR-management-system/poto/Ghazi.jpg","Senior",
0
);
let Employee2= new EmployeeInfo(1001,"Lana Ali","Finance","./Lana.png","Senior",2000);
let Employee3=new EmployeeInfo(1002,"Tamara Ayoub","poto/Tamara.jpg","Senior",2000);
let Employee4= new EmployeeInfo(1003,"Safi Walid","Administration","/home/abeer/HR-management-system/poto/Safi.jpg","Mid-Senior",1500);
let Employee5= new EmployeeInfo(1004,"Omar Zaid","Development","/home/abeer/HR-management-system/poto/Omar.jpg","Senior",2000);
let Employee6= new EmployeeInfo(1005,"Rana Saleh","Development","/home/abeer/HR-management-system/poto/Rana.jpg","junior",1000);
let Employee7= new EmployeeInfo(1006,"Hadi Ahmad","Finance","/home/abeer/HR-management-system/poto/Hadi.jpg","Mid-Senior",1500);

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