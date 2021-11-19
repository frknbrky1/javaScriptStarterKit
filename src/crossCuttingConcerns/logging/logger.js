export class BaseLogger {
    //extend edilen tüm classlar bu log fonksiyonuna sahiptir
    log(data) {
        console.log("Default logger : " + data)
    }
}

export class EalasticLogger extends BaseLogger {
    //burda BaseLogger daki log fonksiyonunu eziyoruz
    log(data) {
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Mongo" + data)
    }
}