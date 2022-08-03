'use strict'
var Id=999;

const Employee1={
    EmployeeID:0,
    fullName:"Ghazi Samer",
    Department :"Administration",
    "Image URL":"https://cute1.cc/wp-content/uploads/2016/08/20160819-3487.jpg",
    Level:"senuir",
    salary :0,
    uniqueId: function (counter){
           
            this.EmployeeID=counter+1;
            console.log("EmployeeID----"+this.EmployeeID)
++Id;
        },
        getRandomSenior: function() {
            let salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
            let netSalary=salary-(salary*0.075);
            this.salary=netSalary;
            
            console.log("Employee Name  "+this.fullName)
            console.log("salary   "+salary);
           
          }
};
Employee1.uniqueId(Id);

Employee1.getRandomSenior();





const Employee2={
    EmployeeID:1001,
    fullName:"Lana Ali",
    Department :"Finance",
    "Image URL":"https://mrahkat.net/wp-content/uploads/2019/12/6954-3.jpg",
    Level:
    salary : 2000,
    uniqueId: function (counter){
           
        this.EmployeeID=counter+1;
++Id;
console.log("EmployeeID----"+this.EmployeeID)
    },
    getRandomSenior: function() {
        let salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
        let netSalary=salary-(salary*0.075);
        this.salary=netSalary;
        console.log("Employee Name  "+this.fullName)
        console.log("salary   "+salary);
       
      }
};


Employee2.uniqueId(Id);
Employee2.getRandomSenior();




const Employee3={
    EmployeeID:1002,
    fullName:"Tamara Ayoub",
    Department :"Marketing",
    "Image URL":"https://new3.co/wp-content/uploads/2018/01/1883-6.jpg",
    Level:"Senior",
    salary :2000,
    uniqueId: function (counter){
           
        this.EmployeeID=counter+1;
++Id;
console.log("EmployeeID----"+this.EmployeeID)
    },
    getRandomSenior: function() {
        let salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
        let netSalary=salary-(salary*0.075);
        this.salary=netSalary;
        console.log("Employee Name  "+this.fullName)
        console.log("salary   "+salary);
       
      }
};


Employee3.uniqueId(Id);
Employee3.getRandomSenior();

const Employee4={
    EmployeeID:1003,
    fullName:"Safi Walid",
    Department :"Administration",
    Level:"Mid-Senior",
    "Image URL":"https://eveningg.cc/wp-content/uploads/2019/06/11450-6.jpg",
    salary : 1500,
    uniqueId: function (counter){
           
        this.EmployeeID=counter+1;
++Id;
console.log("EmployeeID----"+this.EmployeeID)
    },

    getRandomSenior: function() {
        let salary= Math.floor(Math.random() * (1500 - 1000) + 1000);
        let netSalary=salary-(salary*0.075);
        this.salary=netSalary;
        console.log("Employee Name  "+this.fullName)
        console.log("salary   "+salary);
       
      }
};

Employee4.uniqueId(Id);
Employee4.getRandomSenior();

const Employee5={
    EmployeeID:1004,
    fullName:"Omar Zaid",
    Department :"Development",
    "Image URL":"https://www.nawa3em.com/big/romance10-17-8-2014.jpg",
    Level:"Senior",
    salary:2000,
    uniqueId: function (counter){
           
        this.EmployeeID=counter+1;
++Id;
console.log("EmployeeID----"+this.EmployeeID)
    },

    getRandomSenior: function() {
        let salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
        let netSalary=salary-(salary*0.075);
        this.salary=netSalary;
        console.log("Employee Name  "+this.fullName)
        console.log("salary   "+salary);
       
      }
};
Employee5.uniqueId(Id);
Employee5.getRandomSenior();


const Employee6={
    EmployeeID:1005,
    fullName:"Rana Saleh",
    Department :"Development",
    "Image URL":"https://mrahkat.net/wp-content/uploads/2019/12/6954-6.jpg",
    Level:"junior",
    salary:1000,
    uniqueId: function (counter){
           
        this.EmployeeID=counter+1;
++Id;
console.log("EmployeeID----"+this.EmployeeID)
    },

    getRandomSenior: function() {
        let salary= Math.floor(Math.random() * (1000 - 500) + 500);
        let netSalary=salary-(salary*0.075);
        this.salary=netSalary;
        console.log("Employee Name  "+this.fullName)
        console.log("salary   "+salary);
       
      }  
};
Employee6.uniqueId(Id);
Employee6.getRandomSenior();


const Employee7={
    EmployeeID:1006,
    fullName:"Hadi Ahmad",
    Department :"Finance",
    Level:"Mid-Senior",
    salary:1500,
    "Image URL":"https://media.linkonlineworld.com/img/large/2017/11/18/2017_11_18_13_38_40_513.jpg",
    uniqueId: function (counter){
           
        this.EmployeeID=counter+1;
++Id;
console.log("EmployeeID----"+this.EmployeeID)
    },

    getRandomSenior: function() {
        let salary= Math.floor(Math.random() * (1500 - 1000) + 1000);
        let netSalary=salary-(salary*0.075);
        this.salary=netSalary;
        console.log("Employee Name  "+this.fullName)
        console.log("salary   "+salary);
       
      }
    
};
Employee7.uniqueId(Id);
Employee7.getRandomSenior();
     
 

