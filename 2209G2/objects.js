let products = {
    productName: ["keyboard", "mouse","printer"],
    productDesc: "A car or automobile is a motor vehicle with wheels",
    productPrice: 5600,
    productRatting: 3.5,
    productColor: {
        productA : ["blue","red","pink"],
        productB : ["maroon","white","black"]
    },
    total : function (a,b) {
        let result = a + b ;
        return result
    }

};

console.log(products)


// for (let a in products) {
//     console.log(products[a])
   
// }