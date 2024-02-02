// function findPairs(nums) {
//     let pairs = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 pairs++;
//             }
//         }
//     }
//     return pairs;
// }

// const numbers = [1, 2, 3, 2, 4, 5, 3];
// console.log(findPairs(numbers));

// 2 ________________________________

function sumArray(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

// 3 ________________________________________

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return -1; // Элемент не найден
// }

// const numbers = [1, 3, 5, 7, 9, 11, 13];
// console.log(binarySearch(numbers, 7));
