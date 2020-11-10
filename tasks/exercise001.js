// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!
//if (arr === undefined) throw new Error("array is required");     // Your code here!     

// if (arr.length == 0) {
//     return 0;
//}

//var singles = function singles(arr) {
//if (arr === undefined) throw new Error("array is required");   // Your code here!    
//     sum = 0;
//for (i = 0; i < arr.length; i++) {
//  isDuplicated = false;
// for (j = 0; j < arr.length; j++) {
//    if (arr[i] === arr[j] && i != j) {
//        isDuplicated = true;
//       break;
//     }
//  }
//  if (!isDuplicated) {
//      sum = sum + arr[i];
// }

// } return sum;
//};

//module.exports = { singles };
//var arr = [4, 5, 7, 5, 4, 8];
//singles(arr);

//singles2 = function singles2(arr) {
//    const singlesNumbers = arr.filter(elm => arr.indexOf(elm) == arr.lastIndexOf(elm));
//    return singlesNumbers.reduce((a, b) => a + b);
//}


//function duplicate(arr) {
//   const duplicates = arr.filter(elm => arr.indexOf(elm) !== arr.lastIndexOf(elm));
//   return duplicates.reduce((a, b) => a + b);
//}

function singles(arr) {
    if (arr === undefined) throw new Error("array is required");     // Your code here!     

    if (arr.length == 0) {
        return 0;
    }
    const singlesNumbers = arr.filter(elm => arr.indexOf(elm) == arr.lastIndexOf(elm));
    return singlesNumbers.length == 0 ? 0 : singlesNumbers.reduce((a, b) => a + b);
}
module.exports = { singles };
var arr = [4, 5, 7, 5, 4, 8];
singles(arr);
