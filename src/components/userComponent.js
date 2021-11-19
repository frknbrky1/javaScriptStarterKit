import { BaseLogger, EalasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

//let logger1 = new BaseLogger()
//let logger1 = new EalasticLogger()
let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Furkan", "Berkay", "Aydın")
//userService.add(user1.firstName)
let user2 = new User(2, "Ali", "Veli", "İstanbul")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))





let customer = {id:1, firstName:"Furkan"}

//prototyping
customer.lastName = "Berkay"

console.log(customer.lastName)
