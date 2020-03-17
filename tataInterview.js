// Sort an array to get the third least number

let numArr = [4, 5, 3, 1, 2, 9, 7, 8, 10, 6];

console.log("Unsorted numArr: " + numArr);

numArr.sort((a, b) => a - b);

console.log("Sorted Ascending numArr: " + numArr);
console.log(
  "(Ascending) return 3rd least element .length-2: " + (numArr.length - 2)
);
console.log("(Ascending) return 3rd least element numArr[2]: " + numArr[2]);

numArr.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});
console.log("Sorted Descending numArr: " + numArr);
console.log(
  "(Descending) return 3rd least element .length-2: " + (numArr.length - 2)
);
console.log("(Descending) return 3rd least element numArr[2]: " + numArr[2]);
