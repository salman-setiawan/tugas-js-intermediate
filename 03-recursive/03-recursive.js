// SOAL NO 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
  
    let temp = arr.slice();
  
    temp.pop();
    
    return arr[arr.length - 1] + sumOfArray(temp);
  }

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));


// SOAL NO 2
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;
function countAboveAvg(arr, avg) {
    if(arr.length === 0) {
        return 0
    }
    return (arr[0] > avg) + countAboveAvg(arr.slice(1), avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);


// SOAL NO 3
const arr = [1, 2, 3, 4, 5];
function searchInArray(array, nilai) {
    if(array.length === 0){
        return "angka tidak ditemukan"
    }
    else if(array[array.length -1] === nilai) {
        return "angka ditemukan pada index: " + (array.length -1)
    }
    return searchInArray(array.slice(0, -1), nilai)
}


console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));


// SOAL NO 4
function trianglePattern(a, b) {
  if (a === 0) {
      return;
  }
  let space = "";
  for (let index = 0; index < b; index++) {
      if (index < a - 1) {
          space += " " 
      }else{
       space += String.fromCharCode(64 + (b - a + (index - a) + 2))
      }
  }
  console.log(space);
  trianglePattern(a - 1, b)
}

trianglePattern(5, 5);