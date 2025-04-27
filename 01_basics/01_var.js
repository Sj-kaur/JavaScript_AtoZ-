const accountId =123456  //can't change the value once declared or assigned 
let accountEmail = 'abc@gmail.co'   // We have two methods to declare variables 'let' and 'var' 
var accountPass = '35467'
aaccountCity = 'Pune'
let accountState //undefined

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// Feature	var	                           let / const
// Scope	Function-scoped	               Block-scoped
// Hoisting	Yes (with undefined)	      Yes (but not initialized)
// Redeclaration	Allowed	               Allowed/Not allowed
// Use Case	Avoid in modern JS	           Preferred
 

console.log(accountId)

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.table([accountId,accountEmail,accountPass,accountCity])