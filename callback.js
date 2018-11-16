CALLBACK:

Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task.
Node makes heavy use of callbacks. All the APIs of Node are written in such a way that they support callbacks. 
For example, a function to read a file may start reading file and return the control to the executiol environment 
immediately so that the next instruction can be executed. Once file I/O is complete, it will call the callback
function while passing the callback function, the content of the file as a parameter. So there is no blocking or wait for File I/O. 
This makes Node.js highly scalable, as it can process a high number of requests without waiting for any function to return results.

EXAMPLE:

console.log("user1 made a request");
    setTimeout(callback,5000);
    console.log("user2 made a request");
    setTimeout(callback,5000);
    console.log("user3 made a request");
    setTimeout(callback,5000);

    function callback()
    {
        console.log("users request fullfilled");
    }

OUTPUT:

PS C:\Users\Rajeshwary\Desktop\my-dream-app\e2e> node merge.js
user1 made a request
user2 made a request
user3 made a request
users request fullfilled
users request fullfilled
users request fullfilled
