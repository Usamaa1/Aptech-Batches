



// let products = ["Keyboard", 5000, "lorem ipsum"]


// let productsDetails = products


// productsDetails[2] = "Check each product page for other buying options."




// document.write("products :" + products + "<br>")
// document.write("products details :" + productsDetails)




// let abc = [];

// abc[0] = "Headphone"
// abc[2] = 787
// abc[4] = true
// abc[6] = NaN


// document.write(abc)
// console.log(abc)







// let products = ["https://picsum.photos/200/300", "https://picsum.photos/200", "https://picsum.photos/id/237/200/300","https://picsum.photos/seed/picsum/200/300"];

// let userImage;
// let products = ["Keyboard", 45000, "SteelSeries New Arctis Nova 7X Wireless Multi-Platform Gaming & Mobile Headset — Nova", 4];


// products[0] = "Headphone"



// console.log(products)



// let abc = 78

// let bd;


// let abc = ["Keyboard", 45000, "SteelSeries New Arctis Nova 7X Wireless Multi-Platform Gaming & Mobile Headset — Nova", 4];

// let bd = [];

// bd = [ ...abc ]   //clone

// console.log("abc 1st : " + abc)
// console.log("bd 1st : " + bd)


// bd[0] = 90



// console.log("abc 2nd : " + abc)
// console.log("bd 2nd : " + bd)






// for(j=0; j<3; j++){
//     userImage = prompt("Enter URL of Images: ") 
//     for(k=0; k < 3; k++){
//     products[j] = userImage
//     }

// }



// for(i=0; i < products.length; i++){
//     document.write(`<img src="${products[i]}" >`)
// }



// console.log(abc)





// let arrays = [3,54,56,5]

// let copyArrays = []


// copyArrays = [...arrays];

// console.log("arrays: " + arrays)
// console.log("copy arrays: " + copyArrays)


// copyArrays[0] = 98


// console.log("________________")

// console.log("arrays: " + arrays)
// console.log("copy arrays: " + copyArrays)







// let numbers = [32,2,54,3,56,67,43,23]

// let copyNumbers = []




// let numbers = 32

// let copyNumbers;

// copyNumbers = [ ...numbers ];  //clone





// console.log("Numbers : " + numbers)
// console.log("Copy Numbers : " + copyNumbers)


// copyNumbers[0] = 90

// copyNumbers = 90;

// console.log("______________________")
// console.log("Numbers : " + numbers)
// console.log("Copy Numbers : " + copyNumbers)



// let images = []

// let images = ["https://picsum.photos/200/300?grayscale", "https://picsum.photos/200/300/?blur", "https://picsum.photos/id/870/200/300?grayscale&blur=2", "https://picsum.photos/200/300"]

// let numbers = [4,3,5,65,6,67,78,23]

// let images = []

// let userImage;







// let numbers = []


// for(i=0; i<3; i++){
//     numbers = prompt("enter numbers")

//     for(j=i; j<=i; j++){
//         document.write(numbers)
//     }
     
// }


// let images = []


// for(i=0; i<3; i++){
//     images = prompt("Enter Image URL")

//     for(j=i; j<=i; j++){
//         document.write(`<img src="${images}">`)
//     }
    
// }



// let arrays = [2,4,3,7,8,3,9,87];




// document.write(arrays + "<br>")
// console.log(arrays)


// let a = delete arrays[3];

// document.write(arrays)
// console.log(arrays)


// let abc = arrays.sort((a,b)=>{return a - b})
// arrays.reverse()

// let arrays1 = ["Hello","Hye","how"]
// let arrays2 = ["Bye","fine","you"]


// let combineArrays = arrays1.concat(arrays2)
// let combineArrays = arrays1.join(" ")

// let slices = arrays2.splice(1,0,"are","am","is")









// document.write(arrays2)
// console.log(arrays2)
// document.write(slices)
// console.log(slices)
// console.log(Array.isArray(arrays2))
// console.log(arrays2.indexOf("fine", 1))
// console.log(arrays2.includes("fine"))
// console.log(arrays2.fill("hhhhh"))

















// let multiArrays = [
//     ["1.jpg", "Laptop",7600,4.5],
//     ["2.jpg", "Keyboard",5400,4],
//     ["3.jpg", "Mouse",1200,3.8]
// ]


// for(i=0; i<3; i++){
//     for(j=0; j<4; j++){
//         // document.write(`<img src="${multiArrays[i][0]}" width = '200px'> <h1>${multiArrays[i][1]}</h1> <p>${multiArrays[i][2]}</p> <p>${multiArrays[i][3]}</p>`)
//         document.write(multiArrays[i][j] + " |")
//         console.log(multiArrays[i][j])
//     }
//     console.log("--------------")
// }






// let products = ["Keyboard", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 4500, 4.5]

// let images = ["https://picsum.photos/200/300", "https://picsum.photos/200", "https://picsum.photos/200/300/?blur", "4.jpg"]












// **********Section 2209G3 ***************


// image input from user by using array

// let userImages = [];



// for(j=0 ; j<3; j++){
//     userImages[j] = prompt("Enter Images URL:" + j)
//     for(i=0; i<1; i++){

//         document.write(`<img src="${userImages[j]}" width = "200px">`)
//     }

// }



// Arrays Methods


// Modify

// let numbers = [34,43,5,43,5,67]

// console.log(numbers)

// numbers[1] = 52

// numbers[2] = "Hello"

// console.log(numbers)



// Delete

// let numbers = [34,43,"hello",43,5,67]

// console.log("Before : " + numbers)

// delete numbers[2]
// delete numbers[2]
// console.log("After : " + numbers)



// push

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.pop()

// // numbers.push(54)

// console.log("After : " + numbers)



// pop

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.pop()

// console.log("After : " + numbers)


// shift

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)


// // numbers.shift()

// console.log("After : " + numbers)


// Unshift

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)


// // numbers.unshift("hi")

// console.log("After : " + numbers)



// sort

// let numbers = [34,43,5,43,5,67]
// let numbers = ["Farhan", "Zahid", "Kamran", "Imran", "Aslam","Saad", "Babar"]

// console.log("Before : " + numbers)

// numbers.sort((a,b)=>{return a - b})

// // numbers.sort()


// console.log("After : " + numbers)



// reverse

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.sort((a,b)=>{return a -b})
// numbers.reverse()

// console.log("After : " + numbers)



// slice

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// let abc = numbers.slice(2,3)

// let abc = numbers.slice(2)

// let abc = numbers.slice(0,4)



// console.log("After : " + numbers)
// console.log("ABC : " + abc)


// spread operator



// let a = [5,7,3,2,7,72,23,1];

// let b = [];

// // b = a
// b = [...a] //clone

// console.log("a : "  + a)
// console.log("b : " + b)


// b[2] = "Hello"

// console.log("a : "  + a)
// console.log("b : " + b)




// Example of coping variable

// let a = 23;

// let b;

// b = a

// console.log("a : "  + a)
// console.log("b : " + b)


// b = "Hello"

// console.log("a : "  + a)
// console.log("b : " + b)



// splice

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.splice(0,3)

// numbers.splice(2,3)
// numbers.splice(3,2)

// console.log("After : " + numbers)
// console.log("ABC : " + abc)


// ********Concat**********

// let carArrays = [];
// console.log("Before : " + carArrays)

// let carArrays2 = ["Honda", "Toyota", "Daihatsu"]
// let carArrays3 = ["Huyndai", "Mercedes", "Ferari"]
// let carArrays4 = ["Mira", "Prius", "Mehran"]

// carArrays = carArrays2.concat(carArrays3, carArrays4)

// carArrays = carArrays2.concat(carArrays3,carArrays4)

// carArrays = arrays.concat(arrays2, numberArrays);

// console.log("After : " + carArrays)
// console.log("ABC : " + abc)


// ********Join**********



// let arrays3 = arrays.join(" ")

// let arrays3 = carArrays2.join(" ")

// document.write(arrays3)
// console.log(arrays3)


// ********isArray**********  //used for identifing array


// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];
// console.log(cars)


// let car = "Mehran"
// let a =78;

// let car = Array.isArray(a)
// console.log(car)

// console.log(Array.isArray(car))




// **********indexOf************    // find the value through index from start


// let cars = ["Civic","Mira","Prius","Mira","Vitz","Bolan"];
// console.log(cars)



// console.log(cars.indexOf("Bolan"))

// console.log(cars.indexOf("Mira",2))
// console.log(cars.indexOf("jdskfj"))
// console.log(cars.indexOf("prius"))

// let car = cars.indexOf("Mira",1)

// document.write(car)




// **********lastIndexOf************     // find the value through index from last

// let cars = ["Civic","Mira","Vitz","Prius","Vitz","Bolan"];

// console.log(cars)

// console.log(cars.lastIndexOf("Vitz",3))

// let car = cars.lastIndexOf("Vitz",2)

// console.log(car)


// **********includes()************     // find if value present in the array or not

// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];

// console.log(cars)
// console.log(cars.includes("Mira"))

// let car = cars.includes("Vitz")

// console.log(cars.includes("suzuki"))



// **********toString()************     // Converts array into string

// let cars = [56,579,"Prius","Vitz","Bolan"];

// console.log(cars)

// console.log(cars.toString())


// console.log(cars.toString())



// ***********valueOf()*************

// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];


// console.log(cars.valueOf())


// ***********fill()*************
// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];

// console.log(cars)
// console.log(cars.fill("hello"))

// console.log(cars.valueOf())

// document.write(cars.fill("Hello"))




// let productItems = [["https://i.picsum.photos/id/76/200/300.jpg?hmac=SWpe2KMM2qFiQ8C8WHIZilaJb7KVkgOVVJPTbasGyUU","CC364A - 64A", "Product details of CC364A - 64A | Black iAicon | Compatible Toner Cartridge For Laser Jet Enterprise M4555H MFP | M4555T MFP | Las", 45000, 4.5], ["https://picsum.photos/seed/picsum/200/300","Imaging Plus", "Printing Made EasyFor Models 1005, 1006, 1010, 1012, 1020, 1100, 1200, 1300, 1320, 2015, 2035, 2055, 2400, 2420, 3005, 4200, 4250, 900, 9050Refill Your Laser Printer Toner In homeHp Imaging Plus Powder for all tonersBlack powder250gRefill 3-4 timesEasy RefillingLow cost Refilling", 76900, 3.7]]

// console.log(productItems.length)


// for(i=0; i < productItems.length; i++){
//     document.write(`<img src=${productItems[0][0]}> <h1>${productItems[0][1]}</h1> <h3>${productItems[0][2]}</h3>
//     <p>Rs : ${productItems[0][3]}</p> <p>Rating : ${productItems[0][4]}</p>`)
// }









// let nmbrs = [[4500, 4.3, "hello"],[3600, 3.4],[7800, 3.2]]

// console.log(nmbrs)