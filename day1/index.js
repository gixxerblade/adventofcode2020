//Find the two entries that sum to 2020

const fs = require("fs");
/* fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const TARGET = 2020;
  const line = data.split("\n").map(Number);
  const hashTable = {};
  line.sort((a, b) => a - b);
  line.forEach((val, index) => (hashTable[val] = index));

  for (let i = 0; i < line.length; i += 1) {
    let diff = TARGET - line[i];
    if (hashTable[diff] !== undefined && hashTable[diff] !== i) {
      console.log([line[i] * diff]);
      break;
    } else {
      hashTable[line[i]] = i;
    }
  }
});
 */
fs.readFile("data.txt", "utf-8", (err, data) => {
  const TARGET = 2020;
  const nums = data.split("\n").map(Number).sort((a,b)=>a-b);
  let result = []

  for (let i = 0; i < nums.length - 2; i++) {
      let j = i + 1
      let k = nums.length - 1
      while (j < k) { 
          let sum = nums[i] + nums[j] + nums[k]

          if(sum === TARGET) {
              result.push(nums[i], nums[j], nums[k])
              j++
              k--
          } else if (sum < TARGET) {
              j++
          } else {
              k--
          }
      }
    }
    console.log(result.reduce((a,b)=>a*b));
  })