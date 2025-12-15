const startTime = performance.now();

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

const endTime = performance.now();

console.log(`This code took : ${endTime - startTime}`);

const firstArray = [];
const secondArray = [];

for (i = 0; i < 500; i++) {
  if (i < 250) {
    firstArray.push(i);
  }
  secondArray.push(i);
}

console.log("first array", firstArray.length);
console.log("second array", secondArray.length);

console.time("map1");
const firstUserList = firstArray.map((number) => ({ userId: number }));
console.timeEnd("map1");

console.time("map2");
const secondUserList = secondArray.map((number) => ({ userId: number }));
console.timeEnd("map2");

console.time("find");
const user = secondUserList.find((user) => user.userId === 20);
console.timeEnd("find");

//day 3
