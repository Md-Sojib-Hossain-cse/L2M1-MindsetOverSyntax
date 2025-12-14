// data setup

function generateSimData(size) {
  const itemPool = [
    "apple",
    "banana",
    "orange",
    "tomato",
    "strawberry",
    "blueberry",
    "apple",
    "orange",
  ];

  const generateData = [];

  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * itemPool.length);
    generateData.push(itemPool[randomIndex]);
  }

  return generateData;
}

const generateHugeDataSet = generateSimData(50000);

console.log("Data size :", generateHugeDataSet.length);

//Brute force

const arrStartTime = performance.now();

const removeDupArr = (arr) => {
  const newArr = [];

  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
};

console.log(removeDupArr(generateHugeDataSet));

const arrEndTime = performance.now();

console.log(`Array implementation took : ${arrEndTime - arrStartTime}`);

//set implementation
const setStartTime = performance.now();

const removeDupSet = (arr) => {
  const set = new Set(arr);

  return Array.from(set);
};

console.log(removeDupSet(generateHugeDataSet));

const setEndTime = performance.now();

console.log(`Set implementation took : ${setEndTime - setStartTime}`); 
//
