// function add(){
//     let a = prompt("Enter first number");
//     let b = prompt("Enter Second number");
//     let result = Number(a) + Number(b);
//     console.log(result)
// }

// add()





// ES6 functions //Arrow functions


// let greet = name => {console.log("Hello : " + name)}

// console.log(add(3,4))

// greet("Usama")
// greet("ZAHID")
// greet("Salman")
// greet("Amjad")
// greet("Aslam")
// greet("Haris")
// greet("Umer")
// greet("Wasif")
// // add(34,43)



// let arrays = [
//         ["https://picsum.photos/200/300","Keyboard","Lorem ipsum dolor sit amet consectetur adipisicing elit.",89000, 3.4],
//         ["https://picsum.photos/200", "Mouse", "Minus praesentium officia a iste! Nobis nulla", 326666, 4.5],
//         ["https://picsum.photos/seed/picsum/200/300", "LCD","dolor sint ipsam laudantium ea quia pariatur provident", 45000, 4.6],
// ]

// for(i=0; i<arrays.length; i++){
//     document.write(
//         `<div class = "main">
//         <img src="${arrays[i][0]}">
//         <h1>${arrays[i][1]}</h1>
//         <h3>${arrays[i][2]}</h3>
//         <p>${arrays[i][3]}</p>
//         <p>${arrays[i][4]}</p>
//         </div>
//         `
//     )
// }

// Anonymus function
// arrays.map(function (items,i){
//     document.write(
//                 `<div class = "main">
//                 <img src="${items[0]}">
//                 <h1>${items[1]}</h1>
//                 <h3>${items[2]}</h3>
//                 <p>${items[3]}</p>
//                 <p>${items[4]}</p>
//                 </div>
//                 `
//             )

// })




let numbersArrays= [2,43,5,67,78,98,98,76]



// for (let i =0; i<numbersArrays.length; i++) {
//     console.log(numbersArrays[i],i)
// }



// ES6 map()

// numbersArrays.map((a)=>{
//     console.log(a)
//     document.write(a)
// })

numbersArrays.forEach((a,b)=>{
console.log(a,b)
})

