
function user(){
    let userInput = document.querySelector("#userInput").value
    console.log(`this is message : ${userInput}`)
    document.body.style.backgroundColor = `${userInput}`
}
function user2(){
    let userInput = document.querySelector("#userInput2").value
    console.log(`this is message : ${userInput}`)
    document.querySelector("div").style.backgroundColor = `${userInput}`
}
function user3(){
    let userInput = document.querySelector("#userInput3").value
    console.log(`this is message : ${userInput}`)
}

