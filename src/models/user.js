export default class User {
    constructor(id, firstName, lastName, city, age) {
        //console.log("User oluştu")
        
        //burda prototyping yapıyoruz User class ında:
        //id diye bişey oluştur karşılığı gelen parametredeki id olsun
        //firstName diye bişey oluştur karşılığı gelen parametredeki firstName olsun vs.
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName
        this.city = city
        this.age = age
    }
}