//1) константная сложность O(1)

// function getLastElement(arr) {
//   let count = 0;

//   if (arr.length) {
//     count++;
//     return { el: arr[arr.length - 1], count: count };
//   }
// }

// const array = [1, 3, 4, 5, 8, 9, 100, 45, 67];
// console.log(getLastElement(array));

//2) линейная сложность O(n) - перебор элементов в массиве

// function getSumArray(arr) {
//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     count++;
//     sum += arr[i];
//   }

//   return { el: sum, count: count };
// }

// const array = [1, 2, 3, 4, 5];
// console.log(getSumArray(array));

//3) квадратичная сложность O(n^2) - цикл в цикле (сортировка пузырьком)
//4) экспоненциальная сложность - O(2^n) - удваивается и увеличивается количество действий на каждой итерации()

// function calcArray(arr) {
//   let sum = 0;
//   let mult = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   } // O(n)

//   for (let i = 0; i < arr.length; i++) {
//     mult *= arr[i];
//   }// O(n)

//   return [sum, mult];
// }

// const array = [1, 2, 3];
// console.log(calcArray(array));

// // O(n) + O(n) => o(2n)
// // O(2n) => O(N)
// O(n^2 + n) => O(n^2)
// O(N^2 + m ) => )=O(N^2 + m)
// O(n + log(n)) => O(n) s

// ______________________________________________
//бинарный поиск O(log n)

let array = [-1, 0, 3, 5, 6, 7, 10];
let serach = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.round((right + left) / 2) + left; //getting middle

    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

console.log(serach(array, 11));
