//CODE 1 ========================================

// function add(num){
//     return function(num1){
//         console.log(num1 + num);
//     }
// }

// let addition = add(5);

// addition(5);

//CODE 2 =========================================

// let arr = [1,2,3,4];

// function Search(num){
//     let bool = arr.indexOf(num);
//     if(bool != -1){
//         bool = true;
//     }else{
//         bool = false;
//     }
//     console.log(bool);
    

//     if(num > 0){
//         Search(num-1);
        
//     }

// }

// let a = Search(5);
// console.log(a);

//CODE 3 =========================================

// let myPara = document.getElementById("myPara");
// let body = document.querySelector("body");
// function Print(){
//     let string = prompt("Enter a Sentence");
//     body.style.height = "1000px";
//     body.style.display = "flex";
//     body.style.alignItems = "end";
//     return string;
// }
// myPara.innerText = Print();


// CODE 4 ========================================

// let list = document.getElementById("list3");

// function addItem(){
//     let string = prompt("Enter a Item");
//     return string;
// }

// list.innerText = addItem();


// CODE 5 ========================================


// let choice = prompt("Enter a Element");
// let choice1= prompt("Enter a Background Color");
// let item = document.querySelector("#"+choice);
// console.log(item);

// item.style.backgroundColor = choice1;

//CODE 6 =========================================

// let key = prompt("Enter a name/Key for Local Storage");
// let previousValue = localStorage.getItem(key);
// let button = document.getElementById("button");
// let array = previousValue ? previousValue : [];
// button.innerText = "Add "+key;
// function addObject(){
    
//     let obj = {
//         name : prompt("Enter your name"),
//         CNIC : prompt("Enter your CNIC number"),
//         address : prompt("Enter your address"),
//         number : prompt("Enter your Phone number")
//     };
//     array.push(obj);
//     console.log(array);
//     let stringify = JSON.stringify(array);
//     localStorage.setItem(key,stringify);
// }

//CODE 7 =========================================

// let key = prompt("Enter a name/Key for Local Storage");
// let previousValue = localStorage.getItem(key);
// let button = document.getElementById("button");
// let array = previousValue ? previousValue : [];
// button.innerText = "Add "+key;
// function addObject(){
    
//     let obj = {
//         name : prompt("Enter your Name"),
//         CNIC : prompt("Enter your CNIC"),
//         address : prompt("Enter your Address"),
//         number : prompt("Enter your number")
//     };
//     array.push(obj);
//     console.log(array);
//     let stringify = JSON.stringify(array);
//     localStorage.setItem(key,stringify);
// }

// function retrieve(){
//     let key1 = prompt("Enter a name/Key you want to get");
//     let a= localStorage.getItem(key1);
//     console.log(a);
// }

//CODE 8 ========================================

let obj= {
   
};
let obj1 = {};

function retrieve(){
    obj= {
        name : prompt("Enter your Name"),
        CNIC : prompt("Enter your CNIC"),
        address : prompt("Enter your Address"),
        number : prompt("Enter your number")
    };
    let stringify = JSON.stringify(obj)
    localStorage.setItem("student",stringify);
    let key1 = prompt("Enter a name/Key you want to get");
    obj1 =  JSON.parse(localStorage.getItem(key1));
    return obj1
}

 obj1 = retrieve();

console.log("previous Object ");
console.log(obj);
console.log("New Object ");
console.log(obj1);

