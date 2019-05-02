"use strict";
let money, time;
money = + prompt("Ваш бюджет на месяц?","0");
time = prompt("Введите дату в формате YYYY-MM-DD","");
let appData = {
    money: money,
    timeData: time,
    expenses,
    optinalExpanses,
    income: [],
    saving: false
};

appData.expenses[0].article = prompt("Введите обязательную статью расходов в этом месяц","");
appData.expenses[0].money = +prompt("Во сколько обойдется?","0");

appData.expenses[1].article = prompt("Введите обязательную статью расходов в этом месяц","");
appData.expenses[1].money = +prompt("Во сколько обойдется?","0");

alert(appData.money-appData.expenses[0].money-appData.expenses[1].money);