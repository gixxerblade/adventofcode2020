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
  valid = 0,
  items;
fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let passports = data.toString().split("\n\n");
  passports.forEach((passport) => {
    if(required.every(item=>passport.includes(item)))valid++
  });
  console.log(valid);
});
