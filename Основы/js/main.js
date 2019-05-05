/* jshint browser: true */ 
"use strict";
let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),

    expensesItems = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optinalExpansesItems =  document.getElementsByClassName("optionalexpenses-item"),
    chooseIncome = document.querySelector('.choose-income'),
    checkSaving = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue =document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;
  
let money, time;

function start() {
    
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "0");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "0");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth()+1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;

}
//start();
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpanses: {},
    income: [],
    saving: false,
    
};

startBtn.addEventListener('click', start);

expensesItemBtn.addEventListener('click', function()
{
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value, 
            b = expensesItems[++i].value;
        if (typeof (a) != null && typeof (b) != null &&
            a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = +b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});
optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optinalExpansesItems.length; i++) {
        let opt = optinalExpansesItems[i].value;
        appData.optinalExpanses[i] = opt;
        optionalexpensesValue.textContent += appData.optinalExpanses[i] + ' ';  
    }
});

countBudgetBtn.addEventListener('click', function() {
    if (appData.budget == undefined || isNaN(appData.budget) ||
    appData.budget === 0) {
        dayBudgetValue.textContent = "Произошла ошибка";    
        return;
        }

    appData.moneyPerDay = ((+appData.budget - (+expensesValue.textContent)) / 
    30).toFixed(2);
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = ("Низкий уровень дохода");
    } else if (appData.moneyPerDay < 2000) {
        levelValue.textContent = ("Средний уровень дохода");
    } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = ("Высокий уровень дохода");
    } else {
        levelValue.textContent = ("Произошла ошибка");
    }    
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent =  appData.income;
});

checkSaving.addEventListener('click', function() {
    if (appData.saving === true) {
        appData.saving = false;
    } 
    else {
        appData.saving = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.saving == true)
    {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthInCome = sum / 100 / 12 * percent;
        appData.yearInCome = sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthInCome.toFixed(1);
        yearSavingsValue.textContent = appData.yearInCome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.saving == true)
    {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthInCome = sum / 100 / 12 * percent;
        appData.yearInCome = sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthInCome.toFixed(1);
        yearSavingsValue.textContent = appData.yearInCome.toFixed(1);
    }
});


//appData.chooseExpanses();

//appData.detectDayBudget();

//appData.detectLevel();