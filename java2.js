let money = prompt('What is you budget on month?');

let time = prompt('Please,writhe yor birth date mm-dd-yyyy');

let expenses = prompt('Please, enter your mandatary this month expenses');

let optionalExpenses = prompt('How much it will cost?');



var uappDate = {
    budget: money,
    date: time,
    expenses: {
        expenses: optionalExpenses
    },
    incom: [],
    saving: false,
}

alert(money / 30) ;


