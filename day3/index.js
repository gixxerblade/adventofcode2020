const fs = require("fs");

// Day 3 part 1
fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let array = data.split("\n");
  let trees = 0,
    idx = 0;
  //for (const [right, down] of angles) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].charAt(idx) === "#") {
      trees++;
    }
    idx = (idx + 3) % array[i].length;
  }
  console.log("Day 3 part 1: ", trees);
});

//Day 3 part 2
fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const angles = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];
  let slope = [];
  let array = data.split("\n");
  for (const [right, down] of angles) {
    let idx = 0;
    //console.log(right, down);
    let trees = 0;
    for (let i = 0; i < array.length; i += down) {
      if (array[i].charAt(idx) === "#") {
        trees++;
      }
      idx = (idx + right) % array[i].length;
    }
    slope.push(trees);
  }
  console.log(
    "Day 3 part 2: ",
    slope.reduce((a, b) => a * b)
  );
  //);
});
