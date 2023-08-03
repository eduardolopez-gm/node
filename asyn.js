
// trying callback sin definir el tiempo de espera, lo que significa que se ejecuta de manera sincrona,
//y cuando intenta leer el valor de message no lo encuentra
function trydoAsyncTask(cb) {
    cb()
}
trydoAsyncTask( ()=> console.log(message))
let message = "Callback Called"
// ReferenceError: Cannot access 'message' before initialization

//Crear el tiempo de respuesta que tiene el callback el cual espera antes de seguir la ejecucion
// y de esta manera encuentra el valor
function doAsyncTask(cb) {
    setTimeout(cb,0)
}
doAsyncTask( ()=> console.log(message))

function asynTask(){
const promise = new Promise( (resolve, reject) => {
    console.log('async work complete')
    resolve()
})
return promise
}
asynTask().then ( ()=> console.log('task complete'))


// Example asynchronous function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Example data';
        // Simulating a successful asynchronous operation
        resolve(data);
        // Simulating a failed asynchronous operation
         reject(new Error('Failed to fetch data'));
      }, 2000);
    });
  }
  
  // Consuming the Promise using then() and catch() methods
  fetchData()
    .then((data) => {
      console.log('Data:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });


    const doAsync = () => Promise.resolve("done")
    async function myAsync(){
      let value = await doAsync()
      console.log(value)
      console.log("here")
    }
    myAsync()
 

    const doAsyncTask = () => Promise.resolve("done");
 
    var asyncFunction = async function() {
      return "done";
    };
    asyncFunction().then(v => console.log(v));