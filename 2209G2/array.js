// let numbers = []
// let a = []
// let i;
// let j;

// for(i=0; i<=3; i++){
//     numbers[i] = prompt("Enter a number")
//     for(j=i; j<=i; j++){
//         a[j] = Number(numbers[i])
//     }
// 


// document.write(numbers)
// console.log(a)



// let a = 89;

// let b= a;

// console.log("b value : " + b)

// b = 43

// console.log("a value : " + a)
// console.log("b value : " + b)



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












// **********Section 2209F3 ***************


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

// numbers[2] = "Hello"

// console.log(numbers)



// Delete

// let numbers = [34,43,"hello",43,5,67]

// console.log("Before : " + numbers)


// delete numbers[2]
// console.log("After : " + numbers)



// push

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.push(54)

// console.log("After : " + numbers)



// pop

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.pop()

// console.log("After : " + numbers)


// shift

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)


// numbers.shift()

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
// numbers.sort()

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

// console.log(Array.isArray(car))




// **********indexOf************    // find the value through index from start


// let cars = ["Civic","Mira","Prius","Mira","Vitz","Bolan"];
// console.log(cars)



// console.log(cars.indexOf("Mira",2))
// console.log(cars.indexOf("jdskfj"))
// console.log(cars.indexOf("prius"))

// let car = cars.indexOf("Mira",1)

// document.write(car)




// **********lastIndexOf************     // find the value through index from last

// let cars = ["Civic","Mira","Vitz","Prius","Vitz","Bolan"];

// console.log(cars)

// let car = cars.lastIndexOf("Vitz",2)

// console.log(car)


// **********includes()************     // find if value present in the array or not

// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];

// console.log(cars)

// let car = cars.includes("Vitz")

// console.log(cars.includes("suzuki"))























// let userImages= []


// for(i=0; i<3; i++){
//     userImages[i] = prompt("Enter image URL: " + i);

//     document.write(`<img src="${userImages[i]}" width = "200px">`)
// }






// **********Section 2209G2 ***************


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

// console.log("Before : " + numbers)

// numbers[2] = "hello"

// console.log("After : " + numbers)



// Delete

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// delete numbers[2]

// // delete numbers[2]
// console.log("After : " + numbers)



// push

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)


// // numbers.push("how")

// console.log("After : " + numbers)



// pop

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.pop("jkjkj")
// // numbers.pop()

// console.log("After : " + numbers)


// shift

// let numbers = [34,43,5,43,5,67]

// console.log(numbers)



// // numbers.shift()

// console.log(numbers)


// Unshift

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)


// numbers.unshift(990)

// // numbers.unshift("hi")

// console.log("After : " + numbers)



// sort

// let numbers = [34,43,5,43,5,2,67,1]
// // let numbers = ["Farhan", "Zahid", "Kamran", "Imran", "Aslam","Saad", "Babar"]

// console.log("Before : " + numbers)

// numbers.sort()

// // numbers.sort()

// console.log("After : " + numbers)




// reverse

// let numbers = [34,43,5,43,5,67]
// let numbers = ["Farhan", "Zahid", "Kamran", "Imran", "Aslam","Saad", "Babar"]


// console.log("Before : " + numbers)

// numbers.sort((a,b)=>{return b - a})
// // numbers.reverse()

// console.log("After : " + numbers)



// slice

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// // let abc = numbers.slice(0,4)

//     let  abc = numbers.slice(2,3)

// console.log("After : " + numbers)
// console.log("ABC : " + abc)
// console.log("ABC : " + abc2)


// spread operator

// let a = 32
// let b;

// let a = [5,7,3,2,7,72,23,1];

// let b = [];

// b = [...a] //clone

// console.log("a : "  + a)
// console.log("b : " + b)


// b[2] = "Hello"
// // b = "Hello"

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

// // numbers.splice(2,3)
// numbers.splice(2,2)



// console.log("After : " + numbers)
// // console.log("ABC : " + abc)


// isArray

// let numbers = [34,43,5,43,5,67]
// let numbers = 32

// console.log("Before : " + numbers)

// // let abc = 



// // console.log("After : " + numbers)
// console.log("ABC : " + Array.isArray(numbers))

// indexOf

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// // let abc = 


// console.log("After : " + numbers.indexOf(43,2))


// lastIndexOf

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// // let abc = 


// console.log("After : " + numbers.lastIndexOf(5,4))


// ********Concat**********

// let carArrays = [];
// console.log("Before : " + carArrays)

// let carArrays2 = ["Honda", "Toyota", "Daihatsu"]
// let carArrays3 = ["Huyndai", "Mercedes", "Ferari"]
// let carArrays4 = ["Mira", "Prius", "Mehran"]

// carArrays = carArrays2.concat(carArrays3, carArrays4, )

// console.log(carArrays)

// carArrays = carArrays2.concat(carArrays3,carArrays4)

// carArrays = arrays.concat(arrays2, numberArrays);

// console.log("After : " + carArrays)
// console.log("ABC : " + abc)



// ********Join**********

// let a  = carArrays.join("-")

// console.log(a)

// let arrays3 = arrays.join(" ")

// let arrays3 = carArrays2.join(" ")

// document.write(arrays3)
// console.log(arrays3)


// **********includes()************     // find if value present in the array or not


// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];

// console.log(cars.includes("Prius"))

// console.log(cars)

// let car = cars.includes("Vitz")

// console.log(cars.includes("suzuki"))


// **********toString()************     // Converts array into string

// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];
// let cars = [4,7,56,457,7,667,5,56,56,3,675,56,];

// console.log(cars.toString())
// console.log(23)

// // console.log(cars)


// console.log(cars.toString())


// ***********valueOf()*************

// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];

// console.log(cars.valueOf())


// document.write(cars.valueOf())

// ***********fill()*************
// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];


// console.log(cars.fill("Hello"))


// document.write(cars.fill("Hello"))


// ***********Multidimensional Array*************

let products = [["https://m.media-amazon.com/images/I/81dLH5W903L._AC_UY218_.jpg","Keyboard", "SteelSeries Apex 3 TKL RGB Gaming Keyboard – Tenkeyless Compact Form Factor - 8-Zone RGB Illumination – IP32 Water & Dust Resistant – Whisper Quiet Gaming Switch – Gaming Grade", 4500, 3.7],
["https://m.media-amazon.com/images/I/811-0kItnvL._AC_UY218_.jpg","Wireless Keyboard", "SteelSeries Apex 3 TKL RGB Gaming Keyboard – Tenkeyless Compact Form Factor - 8-Zone RGB Illumination – IP32 Water & Dust Resistant – Whisper Quiet Gaming Switch – Gaming Grade Anti-Ghosting", 2300, 4.5],
["https://m.media-amazon.com/images/I/71tDhEbyPRL._AC_UY218_.jpg","Lazer Keyboard", "Razer Ornata Chroma Gaming Keyboard: Hybrid Mechanical Key Switches - Customizable Chroma RGB Lighting - Individually Backlit Keys - Detachable Plush Wrist Rest - Programmable", 3440, 3.8],
["https://m.media-amazon.com/images/I/71qWTIo8XSL._AC_UY218_.jpg","Dell Keyboard", "KLIM Chroma Wireless Gaming Keyboard RGB New 2022 Version - Long-Lasting Rechargeable Battery - Quick and Quiet Typing - Water Resistant Backlit Wireless Keyboard for PC PS5 PS4", 678000, 4.3]
]



 for(i=0; i< products.length; i++){


    document.write(`<img src= '${products[i][0]}'> <h1>${products[i][1]}</h1> <h3>${products[i][2]}</h3> <p>Rs : ${products[i][3]}</p> <p>Rating : ${products[i][4]}</p>`)

 }



// document.write(`<img src= '${products[i][j]}'> <h1>${products[i][j]}</h1> <h3>${products[i][j]}</h3> <p>Rs : ${products[i][j]}</p> <p>Rating : ${products[i][j]}</p>`)


// document.write(`<img src= '${products[0][0]}'> <h1>${products[0][1]}</h1> <h3>${products[0][2]}</h3> <p>Rs : ${products[0][3]}</p> <p>Rating : ${products[0][4]}</p>`)




// let numbers = [
//     [1,2,4,6,7],
//     [3,5,7,89,6],
//     [7,87,3,23]
// ]


// for(i=0; i< numbers.length; i++){
//     for(j=0; j<numbers[i].length; j++){
//         document.write(`${numbers[i][j]}`)
//     }
//     document.write("<br>")

// }