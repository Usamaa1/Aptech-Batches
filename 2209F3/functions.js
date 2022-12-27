// function add(){
//     let a = prompt("Enter first number");
//     let b = prompt("Enter Second number");
//     let result = Number(a) + Number(b);
//     console.log(result)
// }





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






let arrays = [
        ["https://picsum.photos/200/300","Keyboard","Lorem ipsum dolor sit amet consectetur adipisicing elit.",89000, 3.4],
        ["https://picsum.photos/200", "Mouse", "Minus praesentium officia a iste! Nobis nulla", 326666, 4.5],
        ["https://picsum.photos/seed/picsum/200/300", "LCD","dolor sint ipsam laudantium ea quia pariatur provident", 45000, 4.6],
]

for(i=0; i<arrays.length; i++){
    document.write(
        `<div class = "main">
        <img src="${arrays[i][0]}">
        <h1>${arrays[i][1]}</h1>
        <h3>${arrays[i][2]}</h3>
        <p>${arrays[i][3]}</p>
        <p>${arrays[i][4]}</p>
        </div>
        `
    )
}