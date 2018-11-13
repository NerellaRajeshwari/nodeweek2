ASYNC/AWAIT:

 The async/await feature was officially rolled out by the Node to deal with Promises and function chaining. 
 The functions need not to be chained one after another, simply await the function that returns the Promise. 
 But the function async needs to be declared before awaiting a function returning a Promise
 
EXAMPLE:

async function load() {
    return await new Promise((resolve, reject) => {
        TableImport.findAll().then((tables) => {
           for (let table of tables) {
               await loadData(table.fileName, table.tableName);
       
EXAMPLE IMPLEMENTING PROMISES USING asyncFunc():

function asyncFunc() {
    return new Promise((resolve, reject) => { // (A)
        setTimeout(() => resolve('DONE'), 100); // (B)
    });
}
asyncFunc()
.then(x => console.log('Result: '+x));

Output:
Result: DONE

 NOTE:
 Always a await will be implemented inside a async function.
