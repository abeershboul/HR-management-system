'use strict';
let Id =999;
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
document.write(`<p> Employee Name : ${this.Name} <br>Department :  ${this.Department} <br>Employee Salary : ${this.salary} jd</p>`);



};









let Employee1 = new EmployeeInfo(1000,"Ghazi Samer","Administration","https://cute1.cc/wp-content/uploads/2016/08/20160819-3487.jpg","Senior",
0
);
let Employee2= new EmployeeInfo(1001,"Lana Ali","Finance","https://mrahkat.net/wp-content/uploads/2019/12/6954-3.jpg","Senior",2000);
let Employee3=new EmployeeInfo(1002,"Tamara Ayoub","https://new3.co/wp-content/uploads/2018/01/1883-6.jpg","Senior",2000);
let Employee4= new EmployeeInfo(1003,"Safi Walid","Administration","https://eveningg.cc/wp-content/uploads/2019/06/11450-6.jpg","Mid-Senior",1500);
let Employee5= new EmployeeInfo(1004,"Omar Zaid","Development","https://www.nawa3em.com/big/romance10-17-8-2014.jpg","Senior",2000);
let Employee6= new EmployeeInfo(1005,"Rana Saleh","Development","https://mrahkat.net/wp-content/uploads/2019/12/6954-6.jpg","junior",1000);
let Employee7= new EmployeeInfo(1006,"Hadi Ahmad","Finance","https://media.linkonlineworld.com/img/large/2017/11/18/2017_11_18_13_38_40_513.jpg","Mid-Senior",1500);

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