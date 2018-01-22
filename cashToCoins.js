
const dollarAmount = .10
const piggyBank = {
    quarters: 0,
    dimes: 0,
    nickles: 0,
    pennies: 0
}

// Your magic code here
for (x in piggyBank) {
    if ((dollarAmount % .25) === 0) {
        piggyBank.quarters = dollarAmount / .25;
    } else if ((dollarAmount % .10) === 0) {
        piggyBank.dimes = dollarAmount / .10;
    } else if ((dollarAmount % .05) === 0) {
        piggyBank.nickles = dollarAmount / .05;
    } else if ((dollarAmount % .01) === 0) {
        piggyBank.pennies = dollarAmount / .01;
    }
}



console.log("You have: {");
console.log("quarters:" + piggyBank.quarters);
console.log("dimes:" + piggyBank.dimes);
console.log("nickles:" + piggyBank.nickles);
console.log("pennies:" + piggyBank.pennies);
console.log("}");

