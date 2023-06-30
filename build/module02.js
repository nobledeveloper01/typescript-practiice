"use strict";
/* Module 2: Declare variable types in TypeScript
   Lab start  */
/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations.
    The resulting JavaScript should look the same as the original example when you're done. */
let firstName;
let lastName;
let fullName;
let age;
let ukCitizen;
firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;
if (ukCitizen) {
    document.write(`My name is ${fullName}, I'm ${age}, and I'm a citizen of the United Kingdom.`);
}
else {
    document.write(`My name is ${fullName}, I'm ${age}, and I'm not a citizen of the United Kingdom.`);
}
/* EXERCISE 2
   TODO: You can use types to ensure operation outcomes. Run the code as is and then modify
   it to have strongly typed variables. Then, address any errors you find so that the result
   returned to a is 12. */
let x;
let y;
let a;
x = 'five';
y = 7;
let parsedX;
if (x === 'five') {
    parsedX = 5;
}
else {
    parsedX = parseInt(x, 10);
}
if (isNaN(parsedX)) {
    document.write(`Unable to parse '${x}' as a number.`);
}
else {
    a = parsedX + y;
    document.write(a.toString());
}
/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so
   you can pass in the season by referencing an item in the enum, for example
   Season.Fall, instead of the literal string "Fall". */
var Season;
(function (Season) {
    Season["Fall"] = "Fall";
    Season["Winter"] = "Winter";
    Season["Spring"] = "Spring";
    Season["Summer"] = "Summer";
})(Season || (Season = {}));
function whichMonths(season) {
    let monthsInSeason;
    switch (season) {
        case Season.Fall:
            monthsInSeason = "September to November";
            break;
        case Season.Winter:
            monthsInSeason = "December to February";
            break;
        case Season.Spring:
            monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
            break;
    }
    return monthsInSeason;
}
document.write(`<br>${whichMonths(Season.Fall)}`);
/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */
let randomNumbers = [];
let nextNumber;
for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}
document.write(`<br>${randomNumbers}`);