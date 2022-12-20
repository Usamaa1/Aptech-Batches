

// ************JavaScript Basics******************

// alert("this is message alert");

// console.log("Hello World!");
// confirm("Are you sure you want to continue?");
// parseFloat("34.45 hello");
// parseInt("25 years");
// isNan("hello");
// isNaN("hello");
// prompt("Enter your name: ");



// ************variables***************** 

// var userName;

// var userName = "Usama";

// console.log(userName);

//  userName = "Malik";

//  console.log(userName);


//  let camelCaseIsConvention;
//  let _underscoreIsAllowed;
//  let $dollarSignIsAllowed;
//  let -hyphenIsNotAllowed;
// let @!*noSpecialCharactersAreAllowed;


// **********Variables**********



// var a;
// a = 10;

// var a;
// a = 30;

// console.log(a)
// document.write(a)

// let b;
// b = 20;


// let b;
// b = 49;

// console.log(b)


//  const name = 90;

//  name = 50;

// console.log(name)




// console.log(c);


// let  


// const //constant

// var name; 
// name = "Atif";
// var name;
// name = "Zahid";

// let name; 
// name = "Atif";
// let name;
// name = "Zahid";

// const name; 
// name = "Atif";
// const name;
// name = "Zahid";


// document.write(name)


// ************Math Expression***************

// let a = 20; 

// let b = 30;

// let c = 40;







// let result = a + b - c * 10 / 2 * 4;  //BODMAS  ---- Bracket Order Divide Multiply Addition Subtraction
// 20 + (30 - 40) * 10 / 2;
// 20 + (-10) *10 / 2;
// 20 + (-10) * 5;
// 20 - 50;


// console.log(result);

// let num1 = 30;

// let num2 = 40;

// console.log(num1 + num2);

// let total = num1 + num2;

// console.log("Total number is: ", total);

// ****BODMAS****

// let result = 3 + 6 - 1 * 4 / 2;

// console.log(sum);

// ****eliminating ambiguity****

// let result = 3 + (6 - 1) * (4 / 2);

// console.log(sum2);

// ****unfamiliar operators****

// let num1 = 2;
// let num2 = 3;

// let result;

// result = num1 + num2;

// num1++;     //postfix increment
// ++num1;    //prefix increment
// num2--;    //postfix decrement
// --num2;    //prefix decrement

// num1 = num1 + 3;

// num1 += 3;

// *****Operator precedence*********

// let result = 3 + 6 - 1 * 4 / 2 * 3 / 9;

// console.log(result)


// let a = 3

// let a = 40;
// let post = ++a;

// let --a;
// let --a;

// console.log("Post Increment: ", Post)

// let result = a++ + 2;
// let result = ++a + 2;

// let result = --a + 2;
// let result = a-- + 2;



// console.log(result);


// ********Uniary Operator**********

// a++
// b++
// a--
// b--

// *********Binary Operator**********

// a + b
// a * b


// *****return values*******

// let num = 3 + 7 * 2 - 8 / 4;  //return undefined

// let a = 3;
// let b = 5;

// a = b = 3;



// *********Input / Output from User***************

// function sum(){
//     let firstNumber = Number(document.querySelector("#num1").value);
//     let secondNumber = +document.querySelector("#num2").value;


//     // console.log("this is message from submit")
//     console.log(firstNumber, secondNumber);

//     let sum = firstNumber + secondNumber;

//     document.querySelector("#result").innerHTML = sum;

// }


// **********Prompt******************

// var a = prompt("Enter your name");

// console.log(a)



// ***********Condition Statement***********

// if(true){
//     console.log("This message is from if statement");
// }

// let a = 25


// if( a == 30){
//     console.log("if statement is true")
// }






//****  falsy and truthy values in JS****
// 0, -0, 0n, "",null, undefined, Nan, document.all




// if(9){
//     console.log("if statement is true")
// }else{
//     console.log("if statement is false")
// }

// if("text"){
//     console.log("if statement is true")
// }else{
//     console.log("if statement is false")
// }


// if(0){
//     console.log("if statement is true")
// }else{
//     console.log("if statement is false")
// }

// if(""){
//     console.log("if statement is true")
// }else{
//     console.log("if statement is false")
// }


// let a = Number(prompt("Enter Temperature"));

// console.log(a)

// if(a > 45){
//     console.log("Temperature is hot");
// }else if(a > 35){
//     console.log("Temperature is normal");
// }
// else if (a > 25){
//     console.log("Temperature is mixcold");
// }
// else if (a > 5){
//     console.log("Temperature is cold");
// }
// else{
//     console.log("you have provided incorrect details");
// }

// *********Comparision Operators************

// let num1 = 6;

// let result = num1 === 6;
// let result = num1 !== 6;
// let result = num1 != 6;

// console.log("Result: ", result)


// **********Ternary Operators***********


// let temp = 25;

// let weather = `It's ${temp} centigrade and its ${(temp < 25) ? "cold" : "hot"}`

// console.log(weather);


// ************Logical Operators*************

//****Logical AND */
// true && true = true
// false && true = false
// true && false = false
// false && false = false

// *******Logical OR**********/
// true || true = true
// false || true = true
// true || false = true
// false || false = false

// *******Logical NOT**********/
// !true || false
// !false || true



// AND

// 1 | 1  ------> 1
// 1 | 0 --------> 0
// 0 | 1 --------> 0
// 0 | 0 --------> 0


// OR

// 1 | 1 ----------> 1
// 0 | 1 -----------> 1
// 1 | 0 -----------> 1
// 0 | 0 -----------> 0


// NOT
// !1 = 0
// !0 = 1








// *******Convention for boolean**********/
// let isBoolean;



// let temp = 25;


// if (temp < 20){
// console.log("Today's weather is cold, High chance of rain today!")
// }else if (temp > 20 && temp < 25){
//     console.log("Today's weather is good, No prediction of rain today!")
// }else if (temp >= 25 && temp > 31){
//     console.log("Today's weather is sunny, No prediction of rain today!")
// }



// let a = "" || 0 || 23;
// let a = "" && 0 && 23;

// console.log(a);


// ***********Nested If*************

// let i = prompt("Enter your percentage");

// if(i >= 70 && i <=100){
//     if(i >= 90){
//         result = "A+"
//         document.write(result)
//     }else if(i >= 80){
//         result = "A1"
//         document.write(result)
//     }else if(i >= 70){
//         result = "A"
//         document.write(result)
//     }
// }


// *********** Switch Statement***************


// let grade = prompt("Enter your Grade");

// switch (result) {
//     case "A+":
//         document.write("Your grade is A+")
//         break;
//     case "A1":
//         document.write("Your grade is A1")
//         break;
//     case "A":
//         document.write("Your grade is A")
//         break;
//     default:
//         break;
// }







// ************Array***********

// *******Convention for Array**********/

// let arrays;

// let emptyArrays  = [];
// let emptyArrays  = new Array();

// emptyArrays[1] = "Hello"
// emptyArrays[3] = 97
// emptyArrays[5] = "Array"
// emptyArrays[7] = true

// console.log(emptyArrays)

// let numbers = [1,3,4,6,7,6,3,2,5];

// let arrays = [4, true, "car", 3];

// console.log(arrays[0]);

// let copies1 = [2,4,6,7,9];

// let copies2 = [ ...copies1 ];     //spread operator introduce in ES6  //cloning

// console.log(copies1)
// console.log(copies2)



// storing values in Array


// let personalDatas = [];

// for(i = 0; i < 3; i++){
//      personalDatas[i] = prompt("Enter data");
// }

// for(j=0; j<3; j++){

//     console.log(personalDatas[j])
// }




// **********Multi Dimensional Array*************

// let arrays = [
//     ["Corolla","red","XLI"],
//     ["Daihatsu","purple","Mira"],
//     ["Honda","White","Civic"],
//     ["Suzuki","Blue","Alto"]
// ]

// document.write("<table border=1px; cellspacing= '0px'>")

// for(i = 0; i< arrays.length; i++){
//     document.write("<tr>")
//     for(j=0; j<arrays.length-1; j++){
//         document.write("<td>" + arrays[i][j] + "</td>")
//     }
//     document.write("<tr>")

// }
// document.write("</table>")




// let arrays = ["Corolla","red","XLI"];
// let arrays2 = ["Toyota","4 Wheels","Air Bags"];
// let numberArrays = [2,4,5,7,8,7,2,5,9,1,9];


// document.write(arrays + "<br>");


// *****Modify Array*******

// arrays[1] = "purple"
// document.write(arrays + "<br>");

// *****Delete Array*******

// delete arrays[1]
// document.write(arrays);


// ********Push Array********

// arrays.push("Power Stearing");

// for(i=0; i < arrays.length; i++){
//     document.write(arrays[i] + "&nbsp | &nbsp")
// }


// ********Pop Array********
// arrays.pop();

// for(i=0; i < arrays.length; i++){
//     document.write(arrays[i] + "&nbsp | &nbsp")
// }


// ********Shift Array***********

// arrays.shift()

// document.write(arrays)



// ********UN Shift Array********

// arrays.unshift("Toyota")

// document.write(arrays)


// ********Sort Array********

// arrays.sort();

// document.write(arrays)




// ********Reverse Array********

// arrays.reverse();

// document.write(arrays)




// ********Concat**********

// let carArrays = [];

// carArrays = arrays.concat(arrays2, numberArrays);

// document.write(carArrays)


// ********Join**********


// let arrays3 = arrays.join(" ")

// document.write(arrays3)
// console.log(arrays3)



// ********Slice**********

// let newArrays = arrays.slice(1,3)
// let newArrays = arrays.slice(1)
// let newArrays = arrays.slice(-1)

// document.write(newArrays)


// ********Splice**********         //Adds items in original Array

// arrays.splice(2,0,"Toyota","Power Stearing")
// arrays.splice(2,1,"Toyota","Power Stearing")

// document.write(arrays)


// ********isArray**********  //used for identifing array

// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];

// let car = "Mehran"

// console.log(Array.isArray(car))



// **********indexOf************    // find the value through index from start

// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];

// let car = cars.indexOf("Mira",1)

// document.write(car)



// **********lastIndexOf************     // find the value through index from last

// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];

// let car = cars.lastIndexOf("Vitz",4)

// document.write(car)




// **********includes()************     // find if value present in the array or not

// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];

// let car = cars.includes("Vitz")
// document.write(car)


// **********some()************          //find 1st value via conditions and return values in true or false
// let ages = [2,4,6,7,45,23,4,18,56,8,6,23,23];

// let myfunction = age => age >= 18;

// b = ages.some(myfunction)

// document.write(b)


// **********every()************        //find all values via conditions and return values in true or false

// let ages = [2,4,6,7,8,6,4,45,23,18,56,23,23];

// let myfunction = age => age <= 18;

// b = ages.every(myfunction)

// document.write(b)



// **********find()************     //find first value via conditions and return actual values

// let ages = [2,4,6,7,8,6,4,45,23,18,56,23,23];

// let myfunction = age => age >= 18;

// b = ages.find(myfunction)

// document.write(b)




// **********findIndex()************    //find first values via conditions and return index

// let ages = [2,4,6,7,8,6,4,45,23,18,56,23,23];

// let myfunction = age => age >= 18;

// b = ages.findIndex(myfunction)

// document.write(b)



// **********filter()************    //find all values based on coditions and place on new array

// let ages = [43,18,2,6,83,3,6,9,6,342,4,7,83,7,34,334,23]

// let myfunction = age => age >= 18;

// let b = ages.filter(myfunction);

// document.write(b)


// **********toString()************     // Converts array into string

// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];

// // console.log(cars)


// console.log(cars.toString())



// ***********valueOf()*************

// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];


// document.write(cars.valueOf())


// ***********fill()*************
// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];


// document.write(cars.fill("Hello"))




// ************** LOOPS ***************

//-------------------------------------

// *************FOR LOOP **************

// for(let i = 0; i<=10; i++){
//     console.log("Number: ", i+1);
// }

// let i = 1

// for (; i < 10; i++){
//     console.log(`2 x ${i+1} = ${(i+1)*2}`);
// }



// for (; ; ) {

//     if(i > 3){
//         break;
//     }
//     console.log(i)

//     i++
// }


// let temps = [23, 54, 64, 54, 45]

// for (let i = 0; i < temps.length; i++) {
// temps[i] = (temps[i] * 1.8) + 32;
//     console.log(temps[i]);
// }


// ***********MAP*************



// temps.map((eachItem, i)=>{
// // console.log(i, eachItem);
// // temps[i] = "cat"

// if(i <2 ){
//     break;
// }


// console.log(temps[i])
// })


// for(i=0; i< temps.length; i++){

// if(i >2 ){
//     break;
// }


//     console.log(temps[i])
// }



// **********ForEach*************

// temps.forEach(element => {
//     document.write(`${element} <br>`)
// });






// **************Nested For Loop******************

// for(let i = 0; i<5; i++){
//     document.write("Outer Loop: " + (i+1) + "<br>");

//     for(let j =0; j<=i; j++){
//         document.write("Inner Loop: " + (j+1) + "<br>");

//     }

// }

// ***********EXAMPLE 1*****************

// for(let i = 1; i<=100; i+=10){
//     for(let j=i; j < i+10; j++){
//         document.write(" innerloop: " + j)
//     }
//     document.write(" outerloop: " + "<br>")
// }

for(let i = 1; i<=100; i++){
    for(let j=i; j < i+10; j+=10){
        document.write(`<span>${i}</span>  <span>${i+10}</span>`)
    }
    document.write("<br>")
}


// ***********EXAMPLE 2*****************


// for(let i =5; i>=0; i--){
//     for(let j = 1; j<=i; j++){
//         document.write(i + " ")
//     }
//     document.write("<br>")
// }

// ***********EXAMPLE 3*****************

// for(let i =0; i <=10; i++){
//     for(let space=1;space<=30-i;space++){

//         document.write("&nbsp &nbsp")
//     }
//     for(let j=0; j <=i; j++){

//         document.write("*&nbsp &nbsp")
//     }
//     document.write("<br>")
// }

// for(let i =10; i >=0; i--){
//     for(let space=1;space<=30-i;space++){

//         document.write("&nbsp &nbsp")
//     }
//     for(let j=0; j <=i; j++){

//         document.write("*&nbsp &nbsp")
//     }
//     document.write("<br>")
// }

// *************WHILE LOOP***************

// let i = 0;

// while (i <= 10) {
//     document.write(`
//     <ul class= "list">
//    <li>Hello World ${i}</li>
//     </ul>
//     `);
//     ++i;
// }


// *************DO WHILE LOOP***************

// let i = 0;

// do {
//     document.write(" Hello World <br>");
//     i++
// } while (i <= 10);




// ******************Function*********************

// ES5 Functions

//  function add(num1, num2){
//         let result = num1 + num2;
//         return result;
//     }

//     console.log(add(8,7))

// function cube(num){
//     let result = num**3;
//     return result;
// }

// console.log(cube(8))

// ES6 Function

//     let add = (num1, num2)=>{
//         return num1 + num2;
//     }
// console.log(add(3,5))

// -----------------------------------------

// let cube = num => num**3;

// console.log(cube(4))




// ******************Objects*********************

// let productDetails = {
//     productName: "Headphones",
//     productPrice: 1200,
//     productColor: "Blue",
//     productGST: 10,
//     productSize: ["12 inch.", "16 inch.", "18 inch.", "22 inch."],
//     productTotalPrice: (a, b) => a + b

// }

// let anotherProduct = new Object();

// anotherProduct.ProductName = "Keyboard"
// anotherProduct.ProductColor = "Black"
// anotherProduct.Price = 4500


// document.write(anotherProduct.ProductName)





// document.write(productDetails.productName)
// document.write(productDetails['productName'])
// document.write(productDetails.productSize)
// document.write(productDetails.productTotalPrice(productDetails.productGST,productDetails.productPrice))
// document.write(productDetails.productTotalPrice2())


// ***********Const in Objects************

// const products = {
//     productName: "HeadPhone",
//     productPrice: 9000,
//     productColor: "black"
// }


// console.log(products)


// products.productName = "Keyboard"

// console.log(products)



// products = {
//     productName: "Airpod",
//     productPrice: 4500,
//     productColor: "White"
// }

// console.log(products)


// ***********For in loop in Objects************

// let products = {
//     productName: "HeadPhone",
//     productPrice: 9000,
//     productColor: "black"
// }

// for (let key in products) {
//     document.write(`${key} : ${products[key]} <br>`)
// }










// ****************** Practice section ****************
// ****************** Practice section ****************
// ****************** Practice section ****************
// ****************** Practice section ****************
// ****************** Practice section ****************

// alert("this is message")
// window.alert("this is message 2");

// document.write("this is message 3")

// document.write.innerHTML = "this is message 4";
// document.write.innerHTML = "space"

// console.log("this is message 4");


// variables

// var number1;

// number1 = 10;

// var phonenumber = 34343434;


// phonenumber = 53493489483;

// phonenumber = 31111;


// console.log(phonenumber)





// var number2 = 53;

// var result = number1 + number2;


// var text1 = "This is Message 1 "

// var text2 = "This is Message 2"

// var result = text1 + text2


// document.write("Your text is here " + text1 + text2);
// console.log("Your text is here " + text1 + text2)







// Number
// text
// text / string numbers
// 3.45 decimal value 



// var a= 10;
// var b = 20

// console.log(a+b)



// let age = prompt("Enter your age:")

// let result =    age >= 18 ? "You are eligible for driving" : "You are not eligible for driving";

// console.log(result)



// var a = 10;

// var a;

// console.log(a)


// let a = prompt("Enter your Percentage");

// let age = +a >=18 ? "You can drive a car" : "You can not drive a car"


// console.log(age)


// var a = prompt("Enter first number");

// var b = prompt("Enter second number");

// console.log(Number(a) / Number(b))

// const num1 = 19;

// num1;
// const num1 = 20

// console.log(parseFloat(a))


// BODMAS

// Bracket Order Divide Multiply Add subtract
// 2 + (5 - 6) / 7 * 4

// 2 + 5 - 0.85 *4

// 2 + 5 - 3.4

// 7 - 3.4

// 3.6




// var firstSecond = 10;

// var $alert = 30;

// console.log($alert)


// alert("this is alert box")

// alert(firstSecond)

// var a;


// a = prompt("Enter your age: ");

// document.write(a);


// var a = prompt("Enter your CNIC Number");

// var a = "Your age is: "

// var b = prompt("Enter you age")

// console.log(a + b + " This is last string");


// concatinate + textjoin



// let Marks = prompt("Enter your Marks: ")

// console.log(age)

// if (Marks <= 30){
//     alert("Grade is F");
// }
// else if (Marks <= 40){
//     alert("Grade is D")
// }
// else if(Marks <= 50){
//     alert("Grade is C")
// }
// else if (Marks <= 60){
//     alert("Grade is B")
// }
// else if (Marks <= 70){
//     alert("Grade is A")
// }
// else if(Marks <= 80){
//     alert("Grade is A+")
// }
// else if (Marks <= 90){
//     alert("Grade is A1")
// }



// let i = prompt("Do you have money");

// let j = prompt("Do you have Veihcel");


// if (i === "money" || j === "car"){
//     console.log("Buy the fruits")
// }else if(i === "money" || j === "bike"){
//     console.log("Do not buy fruits")
// }
// else if(i === "nomoney" || j=== "car"){
//     console.log("It's too high don't even go to the market")
// }
// else{
//     console.log("You have no money to buy fruits")
// }




// if ( i <= 10){
//     console.log("less then and equal to 10")
// }else if (i <= 20){
//     console.log("less then and equal to 20")
// }else if (i <= 30){
//     console.log("less then and equal to 30")
// }else {
//     console.log("Your age is to high")
// }



// + ----> concatenate

// -,*,/,%,<,=,>


// console.log(i - 10)


// textjoin ya concatenate

// let age = prompt("Enter your age");
// age >= 18 ? console.log("you are eligible") : console.log("You are not eligible")
// console.log(age)




// Get age from users and print if users age is less then 18 "you are not eligible for driving" and if users age is 18 and greater 18 then print "you are eligible for driving"



// let age = prompt("Enter your age");


// if (age >= 18){
//     document.write("You can drive")
// }else if(age < 18){
//     document.write("you can not drive a car")
// }


// nested if

// if(K3 >= 90, "A+", if ())


// let percentage= prompt("Enter your marks");

// let result;

// if(percentage >= 70 && percentage <= 100){
//     if(percentage >= 90){
//          result = "A+"
//         document.write("Your Grade is " + result);
//     }else if(percentage >= 80){
//          result = "A1"
//         document.write("Your Grade is " + result)
//     }else if(percentage >= 70){
//          result = "A"
//       document.write("Your grade is " + result)
//     }

// }else if(percentage >= 60 && percentage <=100){
//      result = "B"
//     document.write("Your Grade is " + result)
// }else if (percentage >= 50 && percentage <=100){
//      result = "C"
//     document.write("Your Grade is " + result)
// }else if (percentage >= 40 && percentage <=100){
//      result = "D"
//     document.write("Your Grade is " + result)
// }
// else if (percentage < 40 && percentage <=100){
//      result = "F"
//     document.write("Your Grade is " + result)
// }else {
//     document.write("Kindly enter valid percentage")
// }



// // Switch Statement


// let day = prompt("enter number of day")


// switch (result) {
//     case "A+":
//         document.write(" Pass")
//        break;
//     case "A1":
//         document.write(" Pass")
//      break;
//     case "A":
//         document.write(" Pass")
//        break;
//     case "B":
//        document.write(" Pass")
//        break;
//     case "C":
//     document.write(" Pass")
//     break;
//     case "D":
//         document.write(" Pass")
//         break;
//     case "F":
//         document.write(" Fail")
//         break;
//         default:
//         // document.write("Please enter correct number from 1 - 7");
//         // break;
// }






// k3>= 90
// k3>= 80
// k3>= 70
// k3>= 60


// if(logical test, Ture, false)

// let percentage = prompt("Enter your percentage");


// if(percentage >= 90){
//    document.write("Your Grade is A1")
// }else if(percentage >= 80){
//     document.write("Your Grade is A+")
// }else if(percentage >= 70){
//     document.write("Your Grade is A")
// }else if(percentage >= 60){
//     document.write("Your Grade is B")
// }else if(percentage >= 50){
//     document.write("Your Grade is C")
// }else if(percentage >= 40){
//     document.write("Your Grade is D")
// }else if (percentage < 40){
//     document.write("You are fail!")
// }else{
//     document.write("Please enter valid percentage")
// }


// &&AND

// ||OR

// !Not

// falsy values
// 0, -0, "", null, NaN, undefined, document.all

// if (true && true){
//     console.log(true)
// }else{
//     console.log(false)
// }



// if (percentage >= 90 && percentage <= 100){
//     document.write("Your Grade is A1")
// }else if(percentage >= 80 && percentage <= 100){
//         document.write("Your Grade is A+")
//     }else if(percentage >= 70 && percentage <= 100){
//         document.write("Your Grade is A")
//     }else if(percentage >= 60 && percentage <= 100){
//         document.write("Your Grade is B")
//     }else if(percentage >= 50 && percentage <= 100){
//         document.write("Your Grade is C")
//     }else if(percentage >= 40 && percentage <= 100){
//         document.write("Your Grade is D")
//     }else if (percentage < 40 && percentage <= 100){
//         document.write("You are fail!")
//     }else{
//         document.write("Please enter valid percentage")
//     }



// let car = prompt("Enter your transport 1");
// let bike = prompt("Enter your transport 2");

// AND

// if (car === "car" || bike === "bike"){
//     console.log("You can go for Picnic");
// }else{
//     console.log("Sorry! you can't go for Picnic");
// }


//  let car = "car";

//     if (car != "bike"){
//         console.log("You can go for Picnic");
//     }else{
//         console.log("Sorry! you can't go for Picnic");
//     }






// ***********Task1***************
// Get percentage from user and print his grades and remarks    

// ************Task2*************
// Create login scenario for userName and Password and print answer respectedly.



// userName

// password


// let userName = prompt("Enter your User Name")
// let password = prompt("Enter your Password")


//



// let percentage = prompt("Enter your Percentage");


// if(percentage >= 90 && percentage <=100){
// console.log("A1")
// }else if(percentage >= 80 && percentage <=90){
// console.log("A+")
// }else if(percentage >= 70 && percentage <=80){
//     console.log("A")
// }else if (percentage >= 60 && percentage <=70){
//     console.log("B")
// }else if (percentage >= 50 && percentage <=60){
//     console.log("C")
// }else if(percentage >= 40 && percentage <=50){
//     console.log("D")
// }else if(percentage < 40){
//     console.log("F")
// }else{
//     console.log("Please Enter correct Percentage")
// }





// Number()
// +



// switch(k3,"A+","Pass",.....,"F","Fail")


// let day = prompt("Enter day number");






// console.log("Hello world")


// let percentage = prompt("Enter your percentage")


// A+, A1, A--------->

// let grade;

// if (percentage >= 70 && percentage <= 100){   //this is for A grade listing

//     if (percentage >= 90){
//         grade = "A+"
//         document.write("Your grade is: " + grade)
//     }else if(percentage >= 80){
//         grade = "A1"
//         document.write(grade)
//     }else if (percentage >= 70){
//         grade = "A"
//         document.write(grade)
//     }

// }else if(percentage >= 60 && percentage <= 70){
//     grade = "B"
//     document.write(grade)
// }else if(percentage >= 50 && percentage <= 60){
//     grade = "C"
//     document.write(grade)
// }else if(percentage >= 40 && percentage <= 50){
//     grade = "D" 
//     document.write(grade)
// }else if(percentage < 40){
//     grade = "F"
//     document.write(grade)
// }
// else{
//     document.write("Kindly Enter correct percentage")
// }



// switch(grade){
//     case "A+":
//         document.write(" Pass");
//         break;
//     case "A1":
//         document.write(" Pass");
//         break;
//     case "A":
//         document.write(" Pass");
//         break;
//     case "B":
//         document.write(" Pass");
//          break;
//     case "C":
//         document.write(" Pass");
//         break;
//     case "D":
//         document.write(" Pass");
//         break;
//     case "F":
//         document.write(" Fail");
//         break;   
//     default:
//         document.write(" Please Enter correct grades")
//         break;
// }




// A+, A1, A, B, C, D, F

// let percentage = prompt("Enter your percentage");

// let grade;

// if(percentage >= 70 && percentage <=100){

//     if(percentage >= 90){
//          grade = "A+"
//         document.write("Your grade is: " + grade)
//     }else if(percentage >= 80){
//         document.write("A1")
//     }else if(percentage >= 70){
//         document.write("A")
//     }

// }else if(percentage >= 60 && percentage <=70){
//     document.write("B")
// }else if(percentage >= 50 && percentage <=60){
//     document.write("C")
// }else if (percentage >= 40 && percentage <=50){
//     document.write("D")
// }else if(percentage < 40){
//     document.write("F")
// }else {
//     document.write("Please Enter valid Percentage")
// }



// Number()
// parseInt()
// +



// switch(k3,"A","Pass")


// switch(grade){
//     case "A+":
//         document.write(" ------->Pass");
//         break;
//     case "A1":
//         document.write("Monday")
//         break;
//     case "A":
//         document.write("Tuesday")
//         break;
//     case "B":
//         document.write("Wednesday");
//         break;
//     case "C":
//         document.write("Thursday")
//         break;
//     case "D":
//         document.write("Friday")
//         break;    
//     case "F":
//         document.write("Saturday")
//         break;
//     default:
//         document.write("Please enter valid number range from 1 - 7")
//         break;
// }





// k3 = "A1"



// switch(k3, "A1", "Pass", "A+", "Pass")


// let days = prompt("Enter Days in Number")

// switch (days) {
//     case "1":
//         document.write("Sunday");
//         break;
//     case "2":
//         document.write("Monday");
//     break;
// case "3":
//     document.write("Tuesday");
//     break;
// case "4":
//     document.write("Wednesday");
//     break;
// case "5":
//     document.write("Thursday");
//     break;
// case "6":
//     document.write("Friday");
//     break;
// case "7":
//     document.write("Saturday");
//     break;
// default:
//     document.write("Please Enter valid day range form 1 -7")
//     break;

// }




// let percentage = prompt("Enter your percentage");

// let grades;

// if (percentage >= 70 && percentage <= 100) {

//     if (percentage >= 90) {
//         grades = "A+"
//         document.write(grades)
//     } else if (percentage >= 80) {
//         grades = "A1"
//         document.write(grades)
//     } else if (percentage >= 70) {
//         grades = "A"
//         document.write(grades)
//     }

// } else if (percentage >= 60 && percentage <= 70) {
//     grades = "B"
//     document.write(grades)
// } else if (percentage >= 50 && percentage <= 60) {
//     grades = "C"
//     document.write(grades)
// } else if (percentage >= 40 && percentage <= 50) {
//     grades = "D"
//     document.write(grades)
// } else if (percentage < 40) {
//     grades = "F"
//     document.write(grades)
// } else {
//     document.write("Please Enter valid Percentage")
// }



// switch (grades) {
//     case "A+":
//         document.write(" Pass");
//         break;
//     case "A1":
//         document.write(" Pass");
//         break;
//     case "A":
//         document.write(" Pass");
//         break;
//     case "B":
//         document.write(" Pass");
//         break;
//     case "C":
//         document.write(" Pass");
//         break;
//     case "D":
//         document.write(" Pass");
//         break;
//     case "F":
//         document.write(" Fail");
//         break;

// }


// nested for loop

// for (i = 0; i<=5; i++){
//     for(j=0; j<=i; j++){
//         document.write(" " + i)
//     }
//     document.write("<br>")
// }





// let userName = prompt("Enter your User Name")
// let password = prompt("Enter your Password")
// let pincode = prompt("Enter your Pin code")



// if (userName === "admin" && (password === "123" || pincode === "987")){
//     console.log("You have succesfully logged In")
// }else{
//     console.log("Kindly Enter correct username or password")
// }







// let userName = prompt("Enter your User Name or phone")
// let password = prompt("Enter your Password")
// let email = "usama@gmail.com"
// let pin = prompt("Enter your Pin Code")


// if(userName === "admin" && (password === "123" || pin === "453")){
//     document.write("You have successfully logged in")
// }else{
//     document.write("Enter correct user name or password or pin  code")
// }


//  userName === "admin" && password ==="123" ||  pin === "453" ? document.write("You have succesfully logged in") : document.write("Enter correct user name or password")



// if(userName === "admin" || userName === email){
//     if(password === "123"){
//         document.write("You have succefully logged in")
//     }
// }else{
//     document.write("Enter correct user name or password or pin  code")

// }




// while


// document.write("Hello world")


// let i = 20;

// while(i >=  1){

//     // if(i % 2 === 1){

//     //     document.write(i);
//     // }

//     document.write(-i)

//     document.write("<br>")
//     --i;
// }

// let j = 0

// while(j <=  20){

//     // if(i % 2 === 1){

//     //     document.write(i);
//     // }

//     document.write(j)

//     document.write("<br>")
//     j++;
// }



// let i = 20;


// do{

//     document.write(i + "<br>")
//     i--; 
// }
// while(i >=  1)




// <=, >=, ===, ==, !=, 



// let age = prompt("Enter your age")


// age <= 18 ? document.write("You are not able to sign In") : document.write("You are able to sign In")


// let a = 10

// if (!true){
//     document.write("hello")
// }else{
//     document.write("bye")
// }




// for(let i = 0; i <= 10;  i++){
//     console.log(i)
// }


// let userName = prompt("Enter your User Name")
// let password = prompt("Enter your Password")

// let phone = "89898787878"
// let pincode = prompt("Enter your Pin Code")





// if (userName === "admin" && (password === "321" || pincode === "567")){
//     document.write("Login Succesfull")
// }else {
//     document.write("Kindly Enter valid username and password or pincode")

// }

// if ((userName === "admin" || userName === "090839789238" ) && password === "567"){
//     document.write("Login Succesfull")
// }else{
//     document.write("Kindly Enter valid username and password or pincode")

// }




// let age = prompt("Enter your age")


// ternary operator

// userName === "admin" && password === "321" ? document.write("Succesful login") : document.write("Kindly Enter correct username and password")


// ***************Loops***************

// let i = 0;

// while(true){
//     if(i % 2 === 1){

//         document.write(+ i + "<br>")
//     }
//     i++
// }



// do{
//     document.write("hello world <br> <br>")
//     i++
// }while(i = 10)




// let table = prompt("Enter number");


// for (i =1 ; i <= 10 ; i++){

// document.write(`${table} x ${i} = ${table * i} <br>`)

// }



// i =0
// j = 0





// for (i= 1; i < 5 ;i++){
//     console.log("outer loop:" + i + "<br>")
//     for(j=0; j < 5; j++){
//         // console.log("inner loop:" + j + "<br>")
//         console.log("inner loop:" + j)

//     }
// }




// for(let i = 1; i<=100; i+=10){
//     for(let j=i; j < i+10; j++){
//         document.write(" innerloop: " + j)
//     }
//     document.write(" outerloop: " + "<br>")
// }


// i++
// i= i+1

// i = i + 10

// for (i = 1; i <= 100; i+=10){
    
//     // document.write(`${i+1} <br>`)
//     for(j = i; j <= i+10; j++){
//         document.write(`${j} &nbsp &nbsp `)
//     }
//     document.write(`<br>`)
// }




// for(i= 0; i<= 10; i++){
//     document.write(`<img src= "istockphoto-1315205465-170667a.jpg">`)
// }





// let i = 0;



// while(i < 20){
//     // document.write("<h2 class = 'txt'> hello </h2>")
//     // if(i % 2 === 0){
//     document.write(`${i} <br>`)
//     // }
//     i++ //9 + 1= 10
// }



// do {
//     document.write("hello <br>");
//     i++
// }
// while(i > 10)


// let table = prompt("Enter number")

// document.write(`${table} x ${i} = ${i*table} <br>`)

// for(i = 0; i <= 5; i++){

//     document.write("outer loop:" + i + "<br>")

//     for(j = 0; j <= 5; j++){
//         document.write("inner loop:" + j + "<br>")
//     }

// }


// i++
// i = i + 10 




// for(i = 1; i<=100; i+=10){

//     for(j = i; j< i+10; j++){
//         document.write(`&nbsp ${j}`)
//     }
//     // document.write(`outer loop: ${i} <br>`)
//     document.write(`<br>`)
// }



// for(let i = 1; i<=100; i+=10){
//     for(let j=i; j < i+10; j++){
//         document.write("&nbsp" + j)
//     }
//     document.write("<br>")
// }



// for(i = 0; i<100; i+=10){
//     for(j = i; j < i+10; j++){
//         document.write(j + "&nbsp")
//     }
//     document.write( "<br>")

// }

// for(i=0; i<=5; i++){
//     for(j = i; j<=5; j++){
//         document.write(i)
//     }
//     document.write("<br>")
// }

// let i =0;
// while(i < 10){
//     console.log(i);
//     i++
// }

// for(i = 0; i< 2; i++){
//     document.write(`outer: ${i+1}  <br>`)
//     for(j= 0; j <10; j++){
//         document.write(`inner: ${j+1}  <br>`)

//     }

// }



// for(i = 0; i < 10; i++){
//     for(j =0; j< 10; j++){
//         document.write(`${i} <br>`)
//     }

// }



// for(i =1; i <= 100; i+=10){
//     for(j=i; j < i+10; j++){
//         document.write(`${j} &nbsp`)
//     }
//     document.write(` &nbsp <br>` )
 

// }






// let i = 1
// while (){
// document.write(`${i} heloo <br>`);
// i++
// }


// i = i+ 10 // 1 = 1+ 10 // 11

// for(i= 1; i<= 100; i+=10){

//     for(j = 11; 11 < i+ 10; j++){
//         document.write(`${j} &nbsp`)
//     }
//     document.write(`<br>`)
    
// }

// let i = 0;

// for(let i = 1; i <= 5; i++){
//     for(j=1; j<=i; j++){
//         document.write(i)
//     }
//     ++i
// document.write(" <br>")
// }





// for (i =1; i <= 100; i+=10){
//     for(j=i; j < i+ 10; j++){
//         document.write(`${j} &nbsp`)
//     }
//     document.write(`<br>`)
// }




// for(i=5; i>=1; i--){
//     for(j=1; j<=i; j++){
//         document.write(i)
//     }
//     document.write(`<br>`)
// }




// for(i=1; i<=10; i++){
//     if (i <= 3){
//         document.write("Hello <br>")
//         continue;
//     }
    
//     document.write(`${i} <br>`)
// }



// for(i=100; i > 1; i-=10){
//     for (j=i; j >i-10; j--){
//         document.write(`${j}  &nbsp`)
        
//     }
//     document.write(`<br>`)
// }


// for (i=5; i >= 0; i--){
//     for(j=0; j<=i; j++){
//         document.write(i)
//     }
//     document.write("<br>")
// }




// for(i=0; i<=7; i++){
//     if(i <= 3){
//         console.log("Hello");
//         break
//     }
//     console.log(i)
// }




// let b = ["Keyboard","dummy text description",3200, true,false, "GST 10%"];


// console.log(b[2], b[4])
// document.write(b[2], b[4])




// let products = []

// for(i=0; i<3; i++){
//     products[i] = prompt("Enter : ")
// }

// console.log(products)


// for(i=0; i<5; i++){
//     for (j=0; j<i; j++){
//         document.write(i)
//     }
//     document.write("<br>")
// }


// let products = ["Keyboard", 2300, "description", false, true]

// let copyProducts =products; //clone


// document.write( "Product : " + products + "<br>")
// document.write("Copy Product : " + copyProducts + "<br>")
// console.log(copyProducts)



// copyProducts[2] = "kdfjkfjd" 


// document.write(products[4])


// document.write( "Product : " + products + "<br>")
// document.write("Copy Product : " + copyProducts + "<br>")
// console.log(copyProducts + "<br>")



// let a = 89;

// let b;

// b = a;

// console.log("B value : " + b)
// console.log("A value : " + a)

// b = 78;

// a = 76

// console.log("B value : " + b)
// console.log("A value : " + a)


// let images = []

// let images = ["https://picsum.photos/200/300","https://picsum.photos/200", "https://picsum.photos/200/300?grayscale", "https://picsum.photos/seed/picsum/200/300","https://picsum.photos/200/300?grayscale"]

// let inputImage = []



// for (j=0; j<3; j++){
// inputImage[j] = prompt("Enter numbers");

// for(a=j; a<j; a++){
//     inputImage[j] = images[a];
// }

// }





// for(i=0; i<3; i++){
//     // document.write(`<img src= "${images[i]}">`)
//     document.write(`${images[i]}`)
// }




// let numbers = []

// let userInput = [];


// for(i=0; i<=3; i++){
//     userInput[i] = prompt("Enter numbers")
// }


// for(j=0; j<=3; j++){
//     document.write(`<img src="${userInput[j]}" >`)
// }



// let abc = ["Headphone",5400,"Turtle Beach Stealth 600 Gen 2 USB Wireless Amplified Gaming Headset - Licensed for Xbox", true, false, undefined, NaN, 56.34];



// let abc = [];

// abc[0] = "Headphone"
// abc[2] = 787
// abc[4] = true
// abc[6] = NaN


// document.write(abc)
// console.log(abc)


// let userInput = [];



// for(i=0; i<3; i++){
//     userInput[i] = prompt("Enter Image URL:" + i)

// }

// for(j=0; j<3; j++){
//     document.write(`<img src='${userInput[i]}' width = '200px'>`)
// }



// let userInput = [];



// for(i=0; i<3; i++){
//     userInput[i] = prompt("Enter Image URL:" + i)
//     document.write(`<img src="${userInput[i]}" width='200px'>`)

// }

