let products = {
    productName: ["Keyboard","Mouse","Headphone","Bag"],
    productDesc: "Kindly nominate your best student as Student of the Month (SOM) for Dec till 04 Jan 2023 (Wednesday).",
    productPrice: [76000, 7800, 3400],
    productTax: [3,5,7],  
    productColor: {
        keyboardColor: ["red","blue","black"],
        mouseColor: ["purple","pink","orange"],
        headphoneColor: ["Sea Blue","Magenta","violet"],
        bagColor: ["Yellow","Light blue","green"]
    },
    productRatting: [4.5, 3.5, 5.6],
    total : (a,b,c,d,f)=>{
        let result = a + b+c+d+f;
        return result
    }
}


console.log(products.productColor.keyboardColor[2])

document.write(products.productName + "<br>", "Total Price : " + products.total(products.productPrice[0], products.productTax[0],7,8,09))

// console.log(products.productName[0],products.productName[1])



for (let y in products) {
console.log(y)
}

