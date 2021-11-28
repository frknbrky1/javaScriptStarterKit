import { BaseLogger, EalasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

//let logger1 = new BaseLogger()
//let logger1 = new EalasticLogger()
let logger1 = new MongoLogger()
let userService = new UserService(logger1)
/*
let user1 = new User(1, "Furkan", "Berkay", "Aydın")
//userService.add(user1.firstName)
let user2 = new User(2, "Ali", "Veli", "İstanbul")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))
*/





let customer = {id:1, firstName:"Furkan"}

//prototyping
customer.lastName = "Berkay"

console.log(customer.lastName)


console.log("----------------------------")


userService.load()
let customerToAdd = new Customer(1, "Seda", "Yılmaz", "Ankara", "sadasda")
customerToAdd.type = "customer"
userService.add(customerToAdd)

let customerToAdd2 = new Customer(2, "Seda", "Yılmaz", "Ankara", "123")
customerToAdd2.type = "customer"
userService.add(customerToAdd2)

//userService.add(new Customer(1, "Seda", "Yılmaz", "Ankara", 23, "12312312", "customer"))
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
console.log(userService.listsCustomers())
