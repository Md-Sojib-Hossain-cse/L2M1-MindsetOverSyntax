const set = new Set();

// set.add("apple");
// set.add("mango");
// set.add("banana");
// set.add("apple");

// console.log(set.size);

// const mezba = { username: "mezba" };
// const sojib = { username: "sojib" };
// const mahin = { username: "mahin" };

// const set = new Set();

// set.add(mezba);
// set.add(sojib);
// set.add(mahin);
// set.add(sojib);

// console.log(set);

// const arr = [1, 2, 4, 5, 3, 2];

// const set = new Set(arr);

// set.forEach((item) => console.log(item));

// console.log(set.has(2));

// console.log(set);

// console.log(set.delete(2));

// console.log(set.delete(2));

// console.log(set);

// const test = Array.from(set);

// console.log(test);

const arr = ["banana", "apple", "tomato", "banana"];

// Brute force

const removeDuplicateArray = (arr) => {
  const newArray = [];

  arr.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });

  return newArray;
};

console.log(removeDuplicateArray(arr));

// set implementation

const removeDuplicateSet = (arr) => {
  const set = new Set(arr);

  return Array.from(set);
};
console.log(removeDuplicateSet(arr));
