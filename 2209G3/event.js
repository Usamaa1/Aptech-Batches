// function keyup() {
//     let userValue = document.querySelector("#key2").value
//     document.querySelector(".box").style.backgroundColor = `${userValue}`
//     console.log("key up", userValue)
// }
// function keydown() {
//     let userValue = document.querySelector("#key1").value
//     console.log("key down", userValue)
// }
// function keypress() {
//     let userValue = document.querySelector("#key3").value
//     console.log("key press", userValue)
// }


// let up = ()=>{
//     let userValue = document.querySelector('#key1').value
//     document.getElementById('box').style.backgroundColor = userValue

//     console.log(userValue)
// }



// document.getElementById('box').addEventListener('mousemove',function(e) {
//     alert('mouse up')
// })



// document.querySelector(".box").addEventListener("click", (e)=>{
//     console.log("click")
// }

// )

// document.querySelector(".box").addEventListener("mousemove", (e)=>{
//     console.log("mousemove", e)
// }

// )

// document.querySelector(".box").addEventListener("mousedown", (e)=>{
//     console.log("click")
// }

// )



// Canvas



// let canva = document.getElementById("draw").getContext("2d");




// let isBollean = false


// document.querySelector('#draw').addEventListener('mousedown', (e) => {
//     isBollean = true
//     console.log("mouse down")
// })

// document.querySelector('#draw').addEventListener('mouseup', (e) => {
//     isBollean = false
//     canva.beginPath()
//     console.log("mouse up")
// })

// document.querySelector("#draw").addEventListener('mousemove', (e) => {
//     if (isBollean) {
//         console.log("mouse move", e)
//         canva.lineWidth = 3
//         canva.lineCap = 'round'
//         canva.lineTo(e.offsetX, e.offsetY);
//         canva.stroke();
//         canva.beginPath();
//         canva.moveTo(e.offsetX, e.offsetY);


//     }
// })



