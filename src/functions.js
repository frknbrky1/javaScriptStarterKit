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





console.log("--------------")

let numbers1 = [25,29];
numbers1.forEach(function(j) {
  
 
    if (j < 2) {
      console.log("En küçük asal sayı 2'dir. Lütfen 1'den büyük bir tam sayı giriniz.")
  }
  else if (j === 2)  { 
      console.log ("2 asal sayıdır.")
  }
  else {
    for (let i = 2; i < j; i++) {
        console.log("i: "+ i)
        console.log("j: "+ j)
        if (j % i == 0) {
        console.log(j + " asal sayı değildir.");
        return
        } 
    
        
        else if(i===j-1){
        console.log(j + " asal sayıdır.");
        return
        }
        
    }
  }
 
 
});



