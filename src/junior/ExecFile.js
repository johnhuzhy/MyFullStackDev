let path = require("path");

// /a/b/c
console.log(path.dirname("/a/b/c/d.txt"));
// d.txt
console.log(path.basename("/a/b/c/d.txt"));
// .txt
console.log(path.extname("/a/b/c/d.txt"));

// E:\Apirl\abc\jkl
console.log(path.resolve("/Apirl/abc/def/ghi", "../../", "jkl"));

console.log(path.resolve(__dirname, "Apirl02.js"));

let fs = require("fs");

fs.readFile("./20200410.txt", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data.toString());
  }
});

fs.writeFile("./20200410.txt", "node", { flag: "a" }, (err) => {
  if (err) {
    console.error(err);
  }
});
