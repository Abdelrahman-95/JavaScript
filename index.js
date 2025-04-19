let inheritanceValue = +prompt("Enter inheritance amount, please");
let wifeStatus = confirm("Is the wife still living ?");
let inheritanceBoy = 0;
let inheritanceGirl = 0;

if (wifeStatus == true) {
    let inheritanceWife = 1 / 8 * inheritanceValue;
    console.log(`The inheritance for the wife is ${inheritanceWife}`)
    inheritanceValue = inheritanceValue - inheritanceWife
}

let boyNum = +prompt("How many males ?");
let girlNum = +prompt("How many females ?");
let individual = boyNum * 2 + girlNum
let individualPerson = inheritanceValue / individual
let boy = Math.round(individualPerson * 2)
let girl = Math.round(individualPerson)
console.log(`The inheritance for the boy is ${boy}`)
console.log(`The inheritance for the girl is ${girl}`)
