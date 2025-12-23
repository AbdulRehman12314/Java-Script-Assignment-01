alert("Welcome!! \n to my JavaScript Assignment: 01");

var result = document.getElementById('result');

function first() {
    var one = 3;
    var two = 8;
    var sum = one + two;
    result.innerHTML = "<h2>Sum of Two Numbers</h2>" + 
                       "The sum of " + one + " & " + two + " is " + sum;
}

function sec() {
    var one = 3;
    var two = 8;
    var sub = one - two;
    var mul = one * two;
    var div = one / two;
    var mod = one % two;

    result.innerHTML = "<h2>Basic Arithmetic Operations</h2>" +
                       "Subtraction: " + one + " - " + two + " = " + sub + "<br>" +
                       "Multiplication: " + one + " x " + two + " = " + mul + "<br>" +
                       "Division: " + one + " / " + two + " = " + div + "<br>" +
                       "Modulus: " + one + " % " + two + " = " + mod;
}

function third() {
    var undef = 30;
    var incre = undef + 1;
    var add = 7;
    var addition = incre + add;
    var decre = incre - add;
    var remain = decre % 3;

    result.innerHTML = "<h2>Variable Manipulation</h2>" +
                       "Value after declaration: Undefined<br>" +
                       "Initial value: " + undef + "<br>" +
                       "Value after increment: " + incre + "<br>" +
                       "Value after addition of 7: " + addition + "<br>" +
                       "Value after decrement: " + decre + "<br>" +
                       "Remainder when divided by 3: " + remain;
}

function fourth() {
    var cost = 600;
    var total = cost * 5;
    result.innerHTML = "<h2>Movie Ticket Cost</h2>" +
                       "The cost of five tickets of Horror movie is " + total + " PKR";
}

function fifth() {
    var t4 = 4;
    var table = "";
    for (var i = 1; i <= 10; i++) {
        table += t4 + " x " + i + " = " + (t4 * i) + "<br>";
    }
    result.innerHTML = "<h2>Multiplication Table of 4</h2>" + table;
}

function sixth() {
    var celc = 15;
    var farhe = 100;
    var toF = (celc * 9 / 5) + 32;
    var toC = (farhe - 32) * 5 / 9;

    result.innerHTML = "<h2>Temperature Conversion</h2>" +
                       celc + "°C is " + toF + "°F<br>" +
                       farhe + "°F is " + toC + "°C";
}

function seventh() {
    var item1 = 600;
    var item2 = 800;
    var quan1 = 2;
    var quan2 = 4;
    var charges = 4400;
    var total = item1 * quan1 + item2 * quan2 + charges;

    result.innerHTML = "<h2>Shopping Cart</h2>" +
                       "Price of item 1: " + item1 + "<br>" +
                       "Quantity of item 1: " + quan1 + "<br>" +
                       "Price of item 2: " + item2 + "<br>" +
                       "Quantity of item 2: " + quan2 + "<br>" +
                       "Charges: " + charges + "<br>" +
                       "Total amount: " + total;
}

function eight() {
    var total = 500;
    var obtai = 489;
    var perc = (obtai / total * 100).toFixed(2) + "%";

    result.innerHTML = "<h2>Marks Sheet</h2>" +
                       "Total marks: " + total + "<br>" +
                       "Obtained marks: " + obtai + "<br>" +
                       "Percentage: " + perc;
}

function nine() {
    var usd = 10;
    var sr = 25;
    var pkrUSD = 104.8;
    var pkrSR = 28;

    result.innerHTML = "<h2>Currency in PKR</h2>" +
                       "10 USD = " + (usd * pkrUSD) + " PKR<br>" +
                       "25 Saudi Riyal = " + (sr * pkrSR) + " PKR";
}

function ten() {
    var num = 23;
    var calc = ((num + 5) * 10) / 2;

    result.innerHTML = "<h2>Calculation Result</h2>" +
                       "The calculated value is " + calc;
}

function eleven() {
    var currentYear = 2025;
    var birthYear = 2002;
    var age = currentYear - birthYear;

    result.innerHTML = "<h2>Age Calculator</h2>" +
                       "Current year: " + currentYear + "<br>" +
                       "Birth year: " + birthYear + "<br>" +
                       "Age: " + age;
}

function twelve() {
    var radius = 50;
    var circum = 2 * 3.142 * radius;
    var area = 3.142 * radius * radius;

    result.innerHTML = "<h2>The Geometrizer</h2>" +
                       "Radius of Circle: " + radius + "<br>" +
                       "Circumference: " + circum + "<br>" +
                       "Area: " + area;
}

function thirteen() {
    var favSnack = "Cookies";
    var currentAge = 15;
    var maxAge = 45;
    var snackPerDay = 5;
    var totalSnack = (maxAge - currentAge) * 365 * snackPerDay;

    result.innerHTML = "<h2>Lifetime Supply Calculator</h2>" +
                       "Favorite snack: " + favSnack + "<br>" +
                       "Current age: " + currentAge + "<br>" +
                       "Estimated max age: " + maxAge + "<br>" +
                       "Snacks per day: " + snackPerDay + "<br>" +
                       "You will need " + totalSnack + " " + favSnack + " to last until age " + maxAge;
}
