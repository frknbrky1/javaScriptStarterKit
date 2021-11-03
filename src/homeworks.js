//----------GELEN SAYILARIN HEPSİNİN ASAL OLUP OLMAMA KONTROLÜ---------------------
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

//----------ARKADAŞ SAYILAR---------------------
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
 
//----------MÜKEMMEL SAYI MI---------------------
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

//----------1000 EKADAR OLAN SAYILARDAN HANGİSİ ASAL SAYI---------------------
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