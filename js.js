"use strict";
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "0");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "0");
    }
}
start();
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpanses: {},
    income: [],
    saving: true
};

function chooseExpanses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяц", ""),
            b = +prompt("Во сколько обойдется?", "0");
        if (typeof (a) != null && typeof (b) != null &&
            a != "" && b != "" && a.length < 50) {

            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpanses();

function calcPerDay() {
    appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
    alert("Ежедневынй бюджет " + appData.moneyPerDay);
}

calcPerDay();

let level = () => {
    if (appData.moneyPerDay < 100) {
        console.log("Низкий уровень дохода");
    } else if (appData.moneyPerDay < 500) {
        console.log("Средний уровень дохода")
    } else if (appData.moneyPerDay > 500) {
        console.log("Высокий уровень дохода")
    }
}
level();

function checkSaving() {
    if (appData.saving === true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент?");
        appData.monthInCome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего дипозита: " + appData.monthInCome);
    }
}
checkSaving();

function inputOptinalExpanses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt("Введите статью необазятельных расходов", "");
        if (typeof (a) != null && a != "" && a.length < 50) {
            appData.optinalExpanses[i] = a;
        } else {
            i--;
        }
    }
}