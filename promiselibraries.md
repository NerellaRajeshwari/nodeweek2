PROMISES:

Promises are a pattern that helps with one particular kind of asynchronous programming: a function (or method) that returns a single result asynchronously. One popular way of receiving such a result is via a callback (“callbacks as continuations”):

asyncFunction(arg1, arg2,
    result => {
        console.log(result);
    });

Bluebird and Q are famous promise library.
BLUEBIRD:

Bluebird is a fully-featured Promise library for JavaScript. The strongest feature of Bluebird is that it allows you to "promisify" 
other Node modules in order to use them asynchronously. Promisify is a concept applied to callback functions. This concept is used to
ensure that every callback function which is called returns some sort of value.
npm install bluebird
Include by writing:

var Promise = require('bluebird');
Var mongo=promise.promisifyAll(require(‘mongodb’)).Mongoclient;

you can use BlueBird to make the MongoDB module run asynchronously, The next step is to include the bluebird module in your code and
promisify the entire MongoDB module. By promisify, we mean that bluebird will ensure that each and every method defined in the MongoDB
library returns a promise.

Q LIBRARY:

var Q = require('q');

function async() {
return Q.delay(4000)
}

async()
.then(function() {
console.log('async called back');
});

OUTPUT:
async called back//after 4 secs output displayed.

MAJOR DIFFERENCE:
 Bluebird attempts to follow and augment the ES6 promise standard, while Q uses its own API. 
 Either of these libraries can be used to help you manage and coordinate asynchronous operations.

