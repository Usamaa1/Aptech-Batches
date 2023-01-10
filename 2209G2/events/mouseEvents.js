// document.querySelector('#box1').addEventListener("mouseup",(e)=>{
//     console.log(e)
//     document.body.style.backgroundColor = "red"
// })

// document.querySelector('#box1').addEventListener("mousemove",(e)=>{
//     console.log(e)
//     document.body.style.backgroundColor = "red"
// })

// document.querySelector('#box1').addEventListener("mousedown",(e)=>{
//     console.log(e)
//     document.body.style.backgroundColor = "red"
// })




let c = document.querySelector("#draw").getContext("2d");

c.fillStyle = 'red';
let isMouseState = false;




document.querySelector("#draw").addEventListener("mouseup", (e)=>{
    console.log("move", e);
    isMouseState = false
    // document.body.style.backgroundColor = "lime";

})

document.querySelector("#draw").addEventListener("mousedown", (e)=>{
    console.log("down", e)
    isMouseState = true

    // document.body.style.backgroundColor = "tomato";
})


document.querySelector("#draw").addEventListener("mousemove", (e)=>{
    if(isMouseState){
        console.log("move", e)
        c.fillRect(e.offsetX, e.offsetY,2,2)

    }
})
