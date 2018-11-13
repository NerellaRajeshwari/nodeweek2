CALLBACK HELL:

Callback hell is any code where the use of function callbacks in async code becomes obscure or difficult to follow.
Generally, when there is more than one level of indirection, code using callbacks can become harder to follow, 
harder to refactor, and harder to test. A code smell is multiple levels of indentation due to passing multiple layers 
of function literals.
This often happens when behaviour has dependencies, i.e. when A must happen before B must happen before C

EXAMPLE:

EXAMPLE:

var fs = require("fs");

fs.readFile('hiii.txt', function(err, data) {
   if (err) {
      return console.error(err);
   }
   console.log(" " + data.toString());
   
   fs.readFile('hii.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log(" "  + data.toString());

     fs.readFile('ab.txt', function (err, data) {
         if (err) {
             return console.error(err);
            }
           console.log(" "  + data.toString());
       });
   });
});


OUTPUT:

PS C:\Users\Rajeshwary\Desktop\hello.html> node sum.js
 Simply Easy Learning!
 WELCOME TO BERKADIA
 RAJEE
