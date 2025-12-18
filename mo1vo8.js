// const set = new Set();

// set.add("apple");
// set.add("orange");
// set.add("banana");
// set.add("apple");
// set.add("orange");

// console.log(set);
// console.log(set.size);

// const aa = { userName: "sojib" };
// const ab = { userName: "arif" };
// const ac = { userName: "hossain" };

// const set = new Set();

// set.add(aa);
// set.add(ac);
// set.add(ab);
// set.add(aa);

// console.log(set);
// console.log(set.size);

// const arr = ["apple", "mango", "banana", "apple"];

// const set = new Set(arr);

// set.forEach((value) => {
//   console.log(value);
// });

// const test = Array.from(set);

// console.log(test);

// console.log(set.has("apple"));
// console.log(set.delete("apple"));

// console.log(set);

const arr = ["apple", "mango", "banana", "apple"];

const removeDupArr = (array) => {
  const newArr = [];
  array.forEach((value) => {
    if (!newArr.includes(value)) {
      newArr.push(value);
    }
  });

  return newArr;
};

const removeDupSet = (array) => {
  const set = new Set(array);

  return Array.from(set);
};
