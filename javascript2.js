// // const arr = [40, 100, -1, 5, 25];
// // console.log(arr.sort((a, b) =>{
// //     return a - b;
// // }));

// // console.log(Math.max.apply(null, arr));

// // //ForEach

// // const num = [45, 4, 9, 16, 25];

// // let text ="";
// // num.forEach((value, index, arr) => {
// //     text += value + " ";
// // });

// // console.log(text);


// // //map()

// // const num1 = [1, 4, 5, 7, 9];
// // const num2 = num1.map((value) => {
// //     return value * 2;
// // });

// // console.log(num2);

// // //filer

// // const num3 = num1.filter((val) => {
// //     return val < 7;
// // });

// // console.log(num3);

// // //1-19

// // var number = Math.floor(Math.random() * 19) + 1;
// // console.log(number);


// // //call()

// const person = {
//     fName : "Aditya",
//     lName : "Sood",
//     fullName : function(){
//         return this.fName + " " + this.lName;
//     }
// }

// const person1 = {
//     fName : "sahil",
//     lName : "adhav",
// }

// let ans = person.fullName.bind(person1);
// console.log(ans);


// function parent(x){
//     return function child(y){
//         return x + y;
//     }
// }

// const add5 = parent(6);
// console.log(add5(4));

// function outer(){
//     let name = "Sahil";
//     function inner(){
//         console.log(name);
//     }
//     inner();
// }
// outer();

// function display(some){
//     document.getElementById("demo").innerHTML = some;
// }

// // const myPromise = new Promise((resolve, reject) => {
// //     let x = 4;
// //     if(x == 2){
// //         resolve("OK");
// //     }
// //     else{
// //         reject("ERROR");
// //     }
// // });

// // myPromise
// //     .then((val) => {
// //         display(val);
// //     })
// //     .catch((error) => {
// //         display(error);
// //     });

// // setTimeout(() => {
// //     display("Sahil Adhav CSA");
// // }, 3000);


// // const myPromise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve("Aditya Sood CSA");
// //     }, 3000);
// // });

// // myPromise.then((val) => {
// //     display(val);
// // });

// // function calculate(length){
// //     return function (breadth){
// //         return function (height){
// //             return length * breadth * height;
// //         }
// //     }
// // }

// // console.log(calculate(4)(5)(6));

// // function resolveAfter2Sec(){
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve("resolved");
// //         }, 2000);
// //     });
// // }

// // async function asyncCall(){
// //     console.log('calling');
// //     const res = await resolveAfter2Sec();
// //     console.log(res);
// // }

// // asyncCall();

// // const arr = [1,2,3,4,5,6,7];
// // const even = arr.filter((val) => val % 2 === 0);
// // console.log(even);

// // arr.forEach(val => console.log(val));

// // const double = arr.map((val) => val * 2);
// // console.log(double);

// // const res = [];
// // for(let i=0; i<3; i++){
// //     res.push(...arr);
// // }
// // console.log(res);

// // let person = {
// //     fName : "sahil",
// //     lName : "Adhav",
// //     fullName(){
// //         return this.fName + " " + this.lName;
// //     }
// // }

// // let newPerson = {
// //     age : 40,
// //     canCook(){
// //         return "Cant Say";
// //     },
// //     __proto__ : person,
// // }

// // console.log(newPerson.fullName());
// // console.log(newPerson.age);
// // console.log(newPerson.canCook());

// /*

// div > p > btn

// event bubble : btn clicked -> p clicked -> div clicked
// event capture : btn clicked <- p clicked <- div clicked

// const div1 = document.getElementById("div1");
// div1.addEventListener("click", () => {
//     log("div1 clicked");
// }, false);

// div1.addEventListener("click", () => {
//     log("div1 clicked");
// }, true);

// myFunction.call("sahil", "adv", "sdc");
// myFunction.apply("sahil", ["adv", "sdc"]);
// myFunction.bind("sahil", ["adv", "sdc"]);
// */

// // const person = {
// //     fullName : function(city, country){
// //         return this.firstName + " " + this.lastName + ", " + city + ", " + country;
// //     }
// // };

// // const newPerson = {
// //     firstName : "Sahil",
// //     lastName : "Adhav"
// // };
// // // console.log(person.fullName.call(newPerson, "Pune", "India"));
// // // console.log(person.fullName.apply(newPerson, ["Pune", "India"]));
// // // const bindUSe = person.fullName.bind(newPerson, "Pune", "India");
// // // console.log(bindUSe());
// // function outerFunction(){
// //     let x = 5;
// //     return function innerFunction(){
// //         let y = 10;
// //         return x + y;
// //     }
// // }

// // let res = outerFunction();
// // console.log(res());


// // const obj1 = {
// //     fullName : function(city, country){
// //         return this.fName + " " + this.lName + " " + city +  " " + country;
// //     }
// // }

// // const obj2 = {
// //     fName : "Sahil",
// //     lName : "Adhav"
// // }

// // const result = obj1.fullName.call(obj2, "Pune", "India");
// // console.log(result);

// // const result2 = obj1.fullName.apply(obj2, ["Pune", "India"]);
// // console.log(result2);

// // const result3 = obj1.fullName.bind(obj2, "Pune", "India");
// // console.log(result3());


// //closure

// function outerFunction(){
//     let x = 20;
//     return function innerFunction(){
//         let y = 20;
//         return x + y;
//     }
// }

// let result = outerFunction();
// console.log(result());

// // const testAdd = outerFunction(10);
// // console.log(testAdd(11));

// class Car{
//     constructor(brand){
//         this.carname = brand;
//     }

//     static testStatic(){
//         return "this is static method";
//     }

//     get carName(){
//         return this.carname;
//     }

//     set carName(x){
//         this.carname = x;
//     }
// }

// let myCar = new Car("TATA");

// document.getElementById("demo").innerHTML = myCar.carName;
// myCar.carname = "FORD";
// document.getElementById("demo").innerHTML = myCar.carName;

// console.log(Car.testStatic());


// const myPromise = new Promise((resolve, reject) => {
//     let x = 5;

//     if(x == 10){
//         resolve("SUCCESS");
//     }
//     else{
//         reject("ERROR");
//     }
// });

// myPromise
//     .then((data) => {
//         console.log(data);
//     })

//     .catch((error) => {
//         console.log(error);
//     });



const newFunction = () => {
    console.log("Calling");
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Resolved");
        }, 2000);
    });
}

const callMyNewFunction = async () => {
    try{
        const res =  await newFunction();
        console.log(res);
        console.log("resolve fullfilled");
    }
    catch(error){
        console.error(error);
    }
};

callMyNewFunction();


    
// const emp = {
//   "employees": {
//     "employee": [
//       {
//         "id": "1",
//         "firstName": "Tom",
//         "lastName": "Cruise",
//         "age" : 42
//       },
//       {
//         "id": "2",
//         "firstName": "Maria",
//         "lastName": "Sharapova",
//         "age" : 54
//       },
//       {
//         "id": "3",
//         "firstName": "James",
//         "lastName": "Bond",
//         "age" : 22
//       }
//     ]
//   }
// }

// //sahil adhav


// const empNameList = emp.employees.employee.map(employee => {
//     return `${employee.firstName} ${employee.lastName}`;
// })

// console.log(empNameList);

// const demoID = document.getElementById("demo");
// // demoID.innerHTML = empNameList.join(" | ");

// const filterAge = emp.employees.employee.filter(employee => {
//     return employee.age > 30;
// });

// let final = "";
// for(let i=0; i<filterAge.length; i++){
//     final += `${filterAge[i].firstName} <br>`
// }

// demoID.innerHTML = final;