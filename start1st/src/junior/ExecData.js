var a = [1, 2, 3];
console.info(a);
a.forEach(function (v) {
  console.log(v);
});
console.dir(a);

var user = new Object();
user.name = "shanshan";
user.getName = function () {
  return this.name;
};
user.setName = function (name) {
  this.name = name;
};
console.dir(user);
// console.trace('trace');

console.time("small loop");
for (var i = 0; i < 10000; i++) {}
console.timeEnd("small loop");

// console.assert( user == null,'raise an exception');

var testFunction = function (msg) {
  console.info(msg);
};

setTimeout(() => {
  console.log("Hello Callback!");
}, 2000);

var timer = setTimeout(testFunction, 5000, "this is a parameter.");
clearTimeout(timer);

var timer1 = setInterval(testFunction, 4000, "testFunction executed");
clearInterval(timer1);

// var timer2 = setInterval(testFunction, 3000, "callback function executed");
// timer2.unref();

var constMod = require("./ConstModule.js");
console.log(constMod.testVar);

if(module == require.main){
    console.log("this is the main module of application.")
}
