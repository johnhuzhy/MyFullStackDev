/**
 * Asynchronous I/O
 */
const glob = require("glob");

var result = null;
console.time("glob");

// Synchronized
result = glob.sync(__dirname + "/**/*");
console.log(result);

// Asynchronous
glob(__dirname + "/**/*", (error, res) => {
    result = res;
    console.log(result);
});

console.timeEnd("glob");
console.log(1 + 2);
