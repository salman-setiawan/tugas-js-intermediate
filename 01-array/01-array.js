// // SOAL NO 1
// const arr = [1, 2, 3];
// const arr2 = [8, 1, 5, 7];
// function reverse(arr) {
//     let panjangArr = arr.length - 1;
//     let reversedArr = [];
//     for (i = panjangArr; i >= 0; i--) {
//       reversedArr.push(arr[i]);
//     }
//     return reversedArr;
// }

// const newArr = reverse(arr);
// const newArr2 = reverse(arr2);

// console.log(arr, newArr);
// console.log(arr2, newArr2);


// SOAL NO 2
// const arr1 = [1, 3, 4, 1, 2, 8];
// const arr2 = [5, 6, 7, 8, 1, 3];

// function getAverage(number) {
//   let output = [];
//   let sum = 0;
//   let count = number.length;
//   let averageNumber = 0;

//   if (number == arr1) {
//       arr1.forEach((item) => {
//         sum += item
//       });
//       averageNumber = (sum/count).toFixed(0);
//       averageNumber = Number(averageNumber);

//       for (let i = 0; i < number.length; i++){
//           if (number[i] > averageNumber) {
//               output.push(arr1[i])
//           };
//       };
//   return output.length;
//   }
//   else if (number == arr2) {
//       arr2.forEach((item) => {
//           sum += item
//       });
//       averageNumber = (sum/count).toFixed(0)
//       averageNumber = Number(averageNumber)
//       for (let i = 0; i < number.length; i++){
//           if (number[i] > averageNumber) {
//               output.push(arr2[i])
//           };
//       };
//   return output.length
//   };  
// };


// console.log(getAverage(arr1))
// console.log(getAverage(arr2))


// SOAL NO 3
const arr = [
  [10],
  [9, 7, 1],
  [2, 8],
];

function searchInArray(arr, numberFind) {
  let arrOneDimension = [];

  for (i = 0; i < arr.length; i++) {
    for (a = 0; a < arr[i].length; a++) {
      arrOneDimension.push(arr[i][a]);
    }
  }

  for (x = 0; x < arrOneDimension.length; x++) {
    if (arrOneDimension[x] == numberFind) {
      return x;
    } 
    else {
      continue;
    }
  }
  return null;
}


console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));