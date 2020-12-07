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

// Day 4 part 1
const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let validPassports = [],
  valid = 0,
  items;
fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let passports = data.toString().split("\n\n");
  passports.forEach((passport) => {
    if (required.every((item) => passport.includes(item))) {
      valid++;
      validPassports.push(passport);
    }
  });
  console.log(valid);
});

//Day 4 part 2

/* 
byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
If cm, the number must be at least 150 and at most 193.
If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
cid (Country ID) - ignored, missing or not.
*/

fs.readSync("testdata.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let [{key:value}, passData ] = data.split(" ")
  console.log(key, value, passData);
});
