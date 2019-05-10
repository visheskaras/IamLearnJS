// class User {
//     constructor(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;    
// }
//     hello() {
//         console.log(`Hello ${this.name}`);
//     }
//     exit(name) {
//         console.log('Пользователь ' + this.name + ' ушел');
//     }

// }



// let ivan = new User('Ivan', 25),
//     alex = new User('Alex',20);
// ivan.hello();

// console.log(ivan);
// console.log(alex);
// ivan.hello();
'use strict';
function showthis() {
    console.log(this);
}
showthis();