// const startTime = performance.now();

// console.time("task");

// for (let i = 0; i >= 1000; i++) {
//   console.log(i);
// }

// console.log(performance);
// console.timeEnd("task");
// const endTime = performance.now();

// console.log(`This code took ${endTime - startTime}`);

const firstArray = [];
const secondArray = [];

for (i = 0; i < 50000; i++) {
  if (i < 30000) {
    firstArray.push(i);
  }
  secondArray.push(i);
}

console.log(firstArray.length);

console.log(secondArray.length);

console.time("first");
const data = firstArray.map((number) => {
  userId: number;
});
console.timeEnd("first");
console.time("second");
const data2 = secondArray.map((number) => {
  userId: number;
});
console.timeEnd("second");
console.time("third");
const data3 = secondArray.find((number) => number === 30);
console.timeEnd("third");
