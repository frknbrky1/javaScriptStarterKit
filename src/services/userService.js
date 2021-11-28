import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        //this.users = []
        //this.users = getCustomersFromDB()
        //prototyping
        this.loggerService = loggerService

        this.employees = []
        this.customers = []
        this.errors = []
    }

    

    checkUserValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")     
        if(user.type == "employee") {
            requiredFields.push("salary")
        }
        //user["age"]
        let hasErrors = false
        let emptyFieldsInUser = []
        for (const field of requiredFields) {
            if(!user[field]) {
                emptyFieldsInUser.push(field)
            }
        }
        
        if(emptyFieldsInUser.length){
            hasErrors = true
            this.errors.push(new DataError(`Validation problems. ${emptyFieldsInUser} is required` , user))
        }

        else if(Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a age` , user))
        }   

        return hasErrors     
    }


    /*checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        //user["age"]
        let hasErrors = false
        let emptyFieldsInCustomer = []
        for (const field of requiredFields) {
            if(!user[field]) {
                emptyFieldsInCustomer.push(field)
            }
        }
        
        if(emptyFieldsInCustomer.length){
            hasErrors = true
            this.errors.push(new DataError(`Validation problems. ${emptyFieldsInCustomer} is required` , user))
        }

        else if(Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a age` , user))
        }   

        return hasErrors     
    }

    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        let emptyFieldsInEmployee = []
        for (const field of requiredFields) {
            if(!user[field]) {
                emptyFieldsInEmployee.push(field)
            }
        }

        if(emptyFieldsInEmployee.length){
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${emptyFieldsInEmployee} is required` , user))
        }

        else if(Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a age` , user))
        }

        return hasErrors         
    }*/

    load() {
        for (const user of users) {
            //console.log(user)
            switch (user.type) {
                case "customer":
                    if(!this.checkUserValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;

                case "employee":
                    if(!this.checkUserValidityForErrors(user)){
                        this.employees.push(user)
                    }
                break;
            
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }

    add(user) {
        //console.log("Kullanıcı eklendi " + user)
        //this.users.push(user)
        switch (user.type) {
            case "customer":
                if(!this.checkUserValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;

            case "employee":
                if(!this.checkUserValidityForErrors(user)){
                    this.employees.push(user)
                }
                break;
        
            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }

    listsCustomers() {
        //console.log("Kullanıcılar listelendi")
        //return this.users
        return this.customers
        
    }

    getCustomerById(id) {
        //console.log("Kullanıcı detayı getirildi")
        //return this.users.find(u=>u.id === id)
        return this.customers.find(u=>u.id === id)

    }

    getCustomersSorted() {
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName < customer2.firstName) {
                return -1
            }
            else if(customer1.firstName === customer2.firstName) {
                return 0
            }
            else {
                1
            }
        })
    }

}