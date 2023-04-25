const App = require("./App")

App.createUser('eduardo@email.com', 'Eduardo Andrade')
App.createUser('isaura@email.com', 'Isaura Raissa')
App.createUser('camu@email.com', 'Camu Sounds')

App.deposit('eduardo@email.com', 100)

App.transfer('eduardo@email.com', 'isaura@email.com', 20)

App.changeLoanFee(10)
App.takeLoan('camu@email.com', 2000, 24)

console.log(App.findUser('eduardo@email.com'))
console.log(App.findUser('eduardo@email.com').account)
console.log(App.findUser('isaura@email.com'))
console.log(App.findUser('isaura@email.com').account)
console.log(App.findUser('camu@email.com'))
console.log(App.findUser('camu@email.com').account)
console.log(App.findUser('camu@email.com').account.loans[0].installments)

