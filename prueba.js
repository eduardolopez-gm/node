  "use strict"
//En este caso el objeto this es undefined y no se puede acceder a el
function Person(first, last){
  this.first = first
  this.last = last
}
let dude = Person('Edu', 'Lopez')
// en cambio, si estructuramos el llamado a la funcion con denotacion de objeto
function Person(first, last){
  this.first = first
  this.last = last
  this.fullName = function(){
    return this.first + ' ' + this.last
  }
}
let dude2 = new Person('Edu', 'Lopez')
console.log(dude2)
console.log(dude2.fullName())
// restablezco el objeto y lo paso dentro de la opcion call, 
dude2 = {}
Person.call(dude2, 'Vane', 'Barbero')
console.log(dude2)


//"use strict"
//oop clasica
class Person {
  //atributos de la clase
  firstName = ''
  lastName = ''

  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }
  //getters
  get firstName () { return this.firstName}
  get lastName () { return this.lastName}
  //setters
  set firstName(name){
     this.firstName = name
  }

  fullName() {
    return `${this.firstName}  ${this.lastName}`
  }
}
//creo el objeto con los parametros
let dude3 = new Person('Edu', 'Lopez')
console.log(dude3)
//modifico un atributo
dude3.firstName = "Vanesita" 
console.log(dude3)
//llamo a la funcion del objeto
console.log(dude3.fullName())

//herencia, copio todo lo que tiene la clase original y le agrego nuevos atributos o funciones
class Student extends Person {
  constructor(firstName, lastName, course){
    //super llama al constructor de la clase original    
    super(firstName, lastName)
    this.course = course
  }
// con super utilizo el metodo que viene de la clase original
  logStudent(){
    return `${super.fullName()} and i'm studying ${this.course}`
  }
}
let student = new Student("Emma", "lopez", "Ispea")
console.log(student.logStudent())




