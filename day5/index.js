const fs = require("fs");
const path = require("path");

// Day 5 part 1

const input = fs
  .readFileSync(path.join(__dirname, "data.txt"), "utf-8")
  .split("\n")
  .filter((x) => x);

const stringToInt = (str) => {
  return parseInt(
    [...str].map((i) => (i === "B" || i === "R" ? 1 : 0)).join(""),
    2
  );
};

const seat = [];
for (const line of input) {
  const row = stringToInt(line.slice(0, 7));
  const column = stringToInt(line.slice(7));
  const id = row * 8 + column;
  seat.push(id);
}
console.log(Math.max(...seat));

// Day 5 part 2
let mine = seat.sort((a, b) => a - b);
for (let i = 0; i < mine.length - 1; i++) {
  if (mine[i + 1] - mine[i] > 1) {
    console.log(mine[i] + 1);
    break;
  }
}
