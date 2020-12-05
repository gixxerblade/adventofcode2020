// Day 4 part 1
const fs = require("fs");

fs.readFile("testdata.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let passports = data.split("\n\n")
});

let obj = {};
