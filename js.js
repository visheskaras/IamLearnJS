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
    saving: true,
    chooseExpanses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
        alert("Ежедневынй бюджет " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Низкий уровень дохода");
        } else if (appData.moneyPerDay < 500) {
            console.log("Средний уровень дохода")
        } else if (appData.moneyPerDay > 500) {
            console.log("Высокий уровень дохода")
        }
    },
    checkSaving: function () {
        if (appData.saving === true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент?");
            appData.monthInCome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего дипозита: " + appData.monthInCome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Стать необязательных расходов?", "");
            appData.optinalExpanses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход?", "");
        while (typeof (items) != "string" || items === "" || items == null) {
            items = prompt("Что принесет дополнительный доход?", "");
        }
        appData.income = items.split(", ");
        let temp = prompt("Может что-то еще?");
        if (typeof (temp) == "string" || temp != "" || temp != null) {
             appData.income.push(temp); }
        appData.income.sort();
        let str = "Способы доп. зарботка: \n";
        appData.income.forEach((item, i) => {
            str += (i + 1) + ": " + item + "\n";
        });
        alert(str);
    }
};

appData.chooseIncome();
Output(appData);

function Output(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == "object") {
            console.log(key + ":");
            Output(obj[key]);
        } else {
            console.log(key + ": "+ obj[key]);
        }
    }
}


//appData.chooseExpanses();

//appData.detectDayBudget();

//appData.detectLevel();