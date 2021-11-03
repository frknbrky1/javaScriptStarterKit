function addToCart(quantity, productName="Elma") {
    console.log("Sepete Eklendi : ürün : " + productName + " adet : " + quantity)
}
//addToCart()
addToCart(10)
//addToCart("limon")
//addToCart("Yumurta",10)
//addToCart(15)

let dolarDun = 9.50

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName,quantity, unitPrice) {
    
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)    
    console.log("Adet : " + product.quantity)    
    console.log("Fiyat : " + product.unitPrice)    
}

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3 //referansları aynı oldu
product2.productName = "KARPUZ"
console.log(product3.productName) 

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2 //değeri atadı
sayi2 = 100
console.log(sayi1)

function addToCart4x(x) {
    console.log(products)
}
function addToCart4(a) {
    console.log(a)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)
addToCart4x(products)

/*
function add(number1, number2) {
    console.log(number1 + number2)
}

function add1(number1, number2, number3) {
    console.log(number1 + number2 + number3)
}

function add2(number1, number2, number3, number4) {
    console.log(number1 + number2 + number3 + number4)
}
*/
function add(bisey,...numbers) { //rest her zaman sona yazılır
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]        
    }    
    console.log(total)
    console.log(bisey)
}

add(20, 30)
//add(20,30, 40)
//add(20, 30, 50)

//console.log(Math.max(30,10,500,600,120)) //en büyüğü döndür istediğin kadar parametre gönder (rest)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({ productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } = { productName:"Elma", unitPrice:10, quantity:5 })

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity) 


function isThisPrime(...params) {    
    for (let i = 0; i < params.length; i++) {
        let counter = 0

        if(params[i] == 0 || params[i] == 1) counter++      

        else {             
            for (let x = 2; x < params[i]; x++) {            
                counter += (params[i] % x == 0) ? 1 : 0                   
            }
        }

        console.log(
            params[i] + 
            " sayısı, bir asal sayı" + 
            (
                (counter == 0) ? "dır" : " değildir."
            )
        )  
    }
}

isThisPrime(7,10,57,59,0,1,2,3,4)

function isThisAmicable(params1,params2) {
    let multipliers1 = []
    let multipliers2 = []
    for (let i = 0; i < params1; i++) {
        if (params1 % i == 0) multipliers1.push(i);  
    }
    for (let i = 0; i < params2; i++) {
        if (params2 % i == 0) multipliers2.push(i);       
    }
    const total = (a, b) => a + b
    var total1 = multipliers1.reduce(total)
    var total2 = multipliers2.reduce(total)

    console.log(params1 + " ve " + params2 + ((total1 == params2 && total2 == params1) ? " Arkadaş Sayılar :)" : " Arkadaş Değiller :("))
}

isThisAmicable(220,284)

function isPerfect() {
    for (let i = 1; i < 1000; i++) {
        let multipliers = 0
        for (let x = 1; x < i; x++) {
            if (i % x == 0) multipliers += x            
        }
        if (multipliers == i) console.log(i + " bir mükemmel sayıdır.")
    }
}

isPerfect()

function primeNumbers() {
    for (let i = 2; i < 1000; i++) {
        let counter = 0
        
        if(i == 0 || i == 1) counter++ 

        else {
            for (let x = 2; x < i; x++) {
                counter += (i % x == 0) ? 1 : 0 
            }            
        }

        if(counter == 0) console.log(i + " bir asal sayı.")
                 
    }
}

primeNumbers()