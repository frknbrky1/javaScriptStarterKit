console.log("Merhaba") //console.log c si küçük olmak zorunda

const a = 5.1 //değiştirilemez atama yapılamaz
console.log(a)

const as = "5.1"
console.log(as)

let b = 4.2
console.log(b)

let bs = "4.2"
console.log(bs)

var c = 3.3
console.log(c)

var cs = "3.3"
console.log(cs)


let dizi = ["1.eleman","2.eleman","3.eleman",4,["5.eleman","6.eleman"]]
console.log(dizi)

console.log("<ul>")
    for (let i = 0; i < dizi.length; i++) {
        console.log("<li>"+dizi[i]+"</li>")
    }
console.log("</ul>")

{/* <ul>
    <li>Deneme</li>
    <li>Deneme2</li>
    <li>Deneme3</li>
</ul> */}

//2.GÜN BİTİŞİ

//QUİZ SORULARI
/*
let number = [10 ,20, [30, 40]]
let a, b, c, d;
[a, b, [c, d]] = number
console.log(d*2)
*/

/*
let populations = {
    x: 10000,
    y: 20000,
    z: 30000
}

let newX, newY, newZ
({x:newX, y:newY, z:newZ} = populations)
console.log(newY)
*/

/*
//doğrusu
let showCategories = function (productId, name, ...categories) {
    console.log(name)
}
//yanlış
let showCategories = function (productId, ...categories, name) {
    console.log(name)
}

showCategories(1, 'computer', "technology", "laptop")
*/

/*
let getVatRate = () => 0.18
//değişkene fonksiyon atanıyor
console.log(getVatRate) //fonksiyon döner
console.log(getVatRate()) // değer döner
*/