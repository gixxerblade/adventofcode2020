// Day 4 part 1
const fs = require("fs");
/* 
'byr', (Birth Year)
'iyr', (Issue Year)
'eyr', (Expiration Year)
'hgt', (Height)
'hcl', (Hair Color)
'ecl', (Eye Color)
'pid', (Passport ID)
'cid', (Country ID)
*/
const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let obj = {},
  valid = 0;
fs.readFile("testdata.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let passports = data
    .toString()
    .split("\n\n")
    .map((n) => n.replace(/\n/g, " "))
    .map((el) => el.split(" "))//.replace(/(:[A-Za-z0-9])\w+)/g, ""))
    console.log(passports);
});
