// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearInterval(timerId);

// function sayHello () {
//     alert ('Hello world');
// }

let timerId = setTimeout(function log() {
    console.log("Hello");
    setTimeout(log, 2000);
});

clearTimeout(timerId);