/*let num = 20;

function showFirstMassege(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMassege("Hello world!");
console.log(num);*/

// let calc = function(a,b) {
//     return (a+b);
// }

// 

let calc = (a, b) => a+b;
console.log(calc(5,7));

let obj = new Object();

let arr = [1, 2, 3, 4, 5];
arr.pop();
arr.push("5");
arr.shift();
arr.unshift("1");
console.log(arr);  

arr.forEach(function(item, i, arr){
    console.log(i + " : "+item + " (массив : "+arr+")");    
});

let mass = [1,3,4,6,7];
for (let i of mass) {
    console.log(i);
}

var soldier = {
    health: 400,
    armor: 100
};
 
let john = {
    health: 100
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);