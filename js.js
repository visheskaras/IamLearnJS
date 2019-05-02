"use strict";
let money, time;
money = prompt("Ваш бюджет на месяц?","0");
time = +prompt("Введите дату в формате YYYY-MM-DD","");
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        article: "",
        money: 0
    },
    optinalExpanses: 0,
    income: [],
    saving: false
};
console.log("ok");
appData.expenses.article = prompt("Введите обязательную статью расходов в этом месяц","");
appData.expenses.money = +prompt("Во сколько обойдется?","0");

appData.budget-=appData.expenses.money;

appData.expenses.article = prompt("Введите обязательную статью расходов в этом месяц","");
appData.expenses.money = +prompt("Во сколько обойдется?","0");

appData.budget-=appData.expenses.money;

alert(appData.budget/30);