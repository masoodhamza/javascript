// console.log('1')
// console.log('2')
// console.log('3')
// setTimeout(() => {
//     console.log('callback function fired')
// }, 2000);
// console.log('4')
// console.log('5')

// getting data from server by httpRequest

// const request = new XMLHttpRequest();

// console.log(request)

// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//     console.log(request, request.responseText)
// } else if (request.readyState === 4) {
//     console.log("Could not fetch the data")
// }
// });

// end point to get api data
// request.open('GET','https://jsonplaceholder.typicode.com/todos');

//opening request
// request.send();


//make it reuseable by adding in function
// const getTodos = () => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(request, request.responseText)
//         } else if (request.readyState === 4) {
//             console.log("Could not fetch the data")
//         }
//     })

//     request.open('GET','https://jsonplaceholder.typicode.com/todos/1');
//     request.send();
// }

// getTodos();


// callback function to reuse it
const getTodosCallback = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText)
        } else if (request.readyState === 4) {
            callback("Could not fetch the data", undefined)
        }
    })

    request.open('GET','https://jsonplaceholder.typicode.com/todos');
    request.send();
}

//ASYNC in Action

console.log('1')

getTodosCallback((err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

console.log('2')

setTimeout(() => {
    console.log('callback function fired')
}, 2000);


console.log('3')


console.log('4')
console.log('5')
