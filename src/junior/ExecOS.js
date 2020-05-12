const os = require('os')
//CPU
const cpus = os.cpus()
console.log("CPU Number:" + cpus.length)
//MEM
const total = os.totalmem()
console.log("Total Memory:"+total/1024/1024/1024)
const free = os.freemem()
console.log("Free Memory:"+free/1024/1024/1024)