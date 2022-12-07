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

// let numbers = [1,3,4,6,7,6,3,2,5];

// let arrays = [4, true, "car", 3];

// console.log(arrays[0]);

// let copies1 = [2,4,6,7,9];

// let copies2 = [ ...copies1 ];     //spread operator introduce in ES6  //cloning

// console.log(copies1)
// console.log(copies2)



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


// temps.map((eachItem, i)=>{
    // console.log(i, eachItem);
    // temps[i] = "cat"
    // console.log(temps[i])
// })







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

let percentage = prompt("Enter your percentage");

let grade;

if(percentage >= 70 && percentage <=100){

    if(percentage >= 90){
         grade = "A+"
        document.write("Your grade is: " + grade)
    }else if(percentage >= 80){
        document.write("A1")
    }else if(percentage >= 70){
        document.write("A")
    }

}else if(percentage >= 60 && percentage <=70){
    document.write("B")
}else if(percentage >= 50 && percentage <=60){
    document.write("C")
}else if (percentage >= 40 && percentage <=50){
    document.write("D")
}else if(percentage < 40){
    document.write("F")
}else {
    document.write("Please Enter valid Percentage")
}



// Number()
// parseInt()
// +



// switch(k3,"A","Pass")


switch(grade){
    case "A+":
        document.write(" ------->Pass");
        break;
    case "A1":
        document.write("Monday")
        break;
    case "A":
        document.write("Tuesday")
        break;
    case "B":
        document.write("Wednesday");
        break;
    case "C":
        document.write("Thursday")
        break;
    case "D":
        document.write("Friday")
        break;    
    case "F":
        document.write("Saturday")
        break;
    default:
        document.write("Please enter valid number range from 1 - 7")
        break;
}


