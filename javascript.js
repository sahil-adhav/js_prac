// // function letUse(){
// //     let x = 1;
// //     if(true){
// //         let x = 2;
// //         console.log(x); //print 2
// //     }
// //     console.log(x) //print 1
// // }

// // function varUse(){
// //     var x = 1;
// //     if(true){
// //         var x = 2;
// //         console.log(x); //print 2
// //     }
// //     console.log(x) //print 2
// // }

// // varUse2 = () => {
// //     console.log("sahil");
// // }

// // letUse();
// // varUse();
// // varUse2();


// // const arr = [1, 4, 5, -1, 22];
// // arr.sort(function(a, b){
// //     return a - b;
// // })

// // document.getElementById("demo").innerHTML = arr;

// function myDisplay(some){
//     document.getElementById("demo").innerHTML = some;
// }

// // let myPromise = new Promise(function(resolve, reject){
// //     let x = 0;

// //     if(x == 7){
// //         resolve("Ok");
// //     }else{
// //         reject("Error");
// //     }
// // });

// // myPromise.then(
// //     function(value){
// //         myDisplay(value);
// //     },
// //     function(error){
// //         myDisplay(error);
// //     }
// // );

// function helloWorld() {
//     /* write your code here */
//     return () => {
//         setTimeout(() => {
//             myResolve();
//         }, 3000);
//     };
// }

// helloWorld().then(() => { 
//     console.log('print me after 3 seconds');
// })

// async function helloWorld() {
//     /* write your code here */
//     return new Promise((myResolve, reject) => {
//         setTimeout(() => {
//             myResolve();
//         }, 3000);
//     });
// }

// async function main(){ 
//     await helloWorld();
//     console.log('print me after 3 seconds');
// }


// function outerFunction(x){
//     return function innerFunction(y){
//         return x+y;
//     }
// }

// const add5 = outerFunction(5);
// console.log(add5(3));

// const person = {
//     firstName :"Sahil",
//     lastName : "Adhav",
//     fullName : function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// const member = {
//     firstName :"Aditya",
//     lastName : "Sood",
// }

// let fullName = person.fullName.bind(member);
// alert(fullName());



// let myPromise = new Promise(function(resolve, reject){
//     let x = 0;

//     if(x == 0){
//         resolve("ok");
//     }else{
//         reject("Error");
//     }
// });

// myPromise.then(
//     function(value){
//         myDisplay(value);
//     }
// )

// async function myPromise(){
//     let x = 0;

//     if(x == 0){
//         return "OK";
//     }else{
//         return "ERROR";
//     }
// };

// myPromise.then(
//     function(value){
//        display(value); 
//     },

//     function(error){
//         display(error)
//     }
// );


const myPromise = new Promise((resolve, reject) => {
    let val = 5;

    if(val < 10){
        resolve("Success");
    }
    else{
        reject("Error");
    }
});

myPromise
    .then((result) => {
        console.log('===>', result);
    })
    .catch((error) => {
        console.log('===>', error);
    });


//constructor function

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log("hey my name is " + this.name);
}

var person1 = new Person("Sahil Adhav", 22);

person1.greet();


function outerFun(x){
    return function innerFun(y){
        return x + y;
    }
}

const add2 = outerFun(5);
console.log(add2(2));


const fruitDB = new mongoose.Schema({
    name : {
        type : String,
        required : [true]
    },
    rating : Number,
    review : String
})