// const useFile = require("./useFile");

// const importData = data => {
//   let string = data.toString();
//   let arr = string.split(" ").map(s => parseInt(s));
//   console.log(activityNotifications(arr, 10000));
// };

function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] <= right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);

      count += left.length - indexLeft;
      indexRight++;
    }
  }

  // return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  return [...result, ...left.slice(indexLeft), ...right.slice(indexRight)];
}

function countInversions(arr) {
  let count = 0;
  function mergeSort(arr) {
    if (arr.length === 1) {
      // return once we hit an array with a single item
      return arr;
    }

    const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
    const left = arr.slice(0, middle); // items on the left side
    const right = arr.slice(middle); // items on the right side

    return merge(mergeSort(left), mergeSort(right));
  }

  // compare the arrays item by item and return the concatenated result
  function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] <= right[indexRight]) {
        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        result.push(right[indexRight]);

        count += left.length - indexLeft;
        indexRight++;
      }
    }

    // return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
    return [...result, ...left.slice(indexLeft), ...right.slice(indexRight)];
  }
  mergeSort(arr);
  return count;
}

console.log(countInversions([7, 5, 3, 1]), 6);
console.log(countInversions([2, 1, 3, 1, 2]), 4);

// 7 5 4 3 1
// 7 5 4   3 1
// 7 5   4   3 1

// 5 7            1
//           1 3  1

// 5 7   4        2  (LENGTH OF ARRAY!)

// 4 5 7    1 3   3 + 3 = 6

// 1 3 4 5 7  10

// function calculateMedian(medArr, d) {
//   let newArr = medArr.slice().sort((a, b) => a - b);
//   let median, top;
//   if (d % 2 === 0) {
//     median = (newArr[d / 2 - 1] + newArr[d / 2]) / 2;
//   } else {
//     median = newArr[Math.floor(d / 2)];
//   }
//   top = newArr.lastIndexOf(median) - Math.floor(d / 2);
//   if (!Number.isInteger(median)) {
//     top = 1;
//   }

//   return { median, top };
// }

// function activityNotifications(expenditure, d) {
//   let alerts = 0;
//   let medArr = [];
//   let medObj;
//   for (let i = 0; i < d; i++) {
//     medArr.push(expenditure[i]);
//   }
//   medObj = calculateMedian(medArr, d);
//   let stopGate = 0;
//   for (let i = d; i < expenditure.length; i++) {
//     stopGate++;
//     if (expenditure[i - 1] > medObj.median) {
//       medObj.top--;
//     } else if (expenditure[i - 1] < medObj.median) {
//       medObj.top++;
//     }

//     if (
//       stopGate > 300 ||
//       medObj.top < 1 ||
//       expenditure[i] >= medObj.median * 1.975
//     ) {
//       stopGate = 0;
//       medObj = calculateMedian(medArr, d);
//       console.log(alerts, medObj.median, i);
//     }
//     if (medObj.median * 2 <= expenditure[i]) {
//       alerts++;
//     }
//     medArr.shift();
//     medArr.push(expenditure[i]);
//   }
//   return alerts;
// }

// // console.log(activityNotifications([10, 20, 30, 40, 50], 3));
// // console.log(" ");
// // console.log(activityNotifications([2, 3, 4, 2, 3, 7, 8, 4, 5], 4));

// useFile(importData, "./hackerrankData.txt");

// function countSwaps(a) {
//   let swaps = 0;
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length - 1; j++) {
//       if (a[j] > a[j + 1]) {
//         swaps++;
//         let hold = a[j];
//         a[j] = a[j + 1];
//         a[j + 1] = hold;
//       }
//     }
//   }
//   console.log(`Array is sorted in ${swaps} swaps.`);
//   console.log("First Element: " + a[0]);
//   console.log("Last Element: " + a[a.length - 1]);
// }

// countSwaps([3, 2, 1, 5, 6, 4]);

// function isValid(s) {
//   let alpha = "qwertyuiopasdfghjklzxcvbnm".split("");
//   let high = 0;
//   let low = 0;
//   for (let i = 0; i < alpha.length; i++) {
//     const reg = new RegExp(alpha[i], "g");
//     let count = (s.match(reg) || []).length;
//     if (high !== 0 && count === high && low !== 1) {
//       return "NO";
//     }
//     if ((count !== 0 && count < low) || low === 0) {
//       low = count;
//     }
//     if (count > high) {
//       high = count;
//     }
//     if (high - low > 1) {
//       return "NO";
//     }
//   }

//   return "YES";
// }

// console.log("base", isValid("aabbc"));

// function makeAnagram(a, b) {
//   let alpha = "qwertyuiopasdfghjklzxcvbnm".split("");
//   let diff = 0;
//   alpha.forEach(letter => {
//     let reg = new RegExp(letter, "g");
//     diff += Math.abs((a.match(reg) || []).length - (b.match(reg) || []).length);
//   });
//   return diff;
// }

// console.log(makeAnagram("showman", "woman"), 2);
// console.log(
//   makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"),
//   30
// );

// function twoStrings(s1, s2) {
//   let alph = "qwertyuiopasdfghjklzxcvbnm".split("");
//   for (let i = 0; i < alph.length; i++) {
//     if (s1.includes(alph[i]) && s2.includes(alph[i])) {
//       return "YES";
//     }
//   }
//   return "NO";
// }

// console.log(twoStrings("are", "a"));
// console.log(twoStrings("be", "cat"));

// function checkMagazine(magazine, note) {
//   for (let i = 0; i < note.length; i++) {
//     if (!magazine.includes(note[i])) {
//       console.log("No");
//       return;
//     }
//     magazine[magazine.indexOf(note[i])] = null;
//   }
//   console.log("Yes");
// }

// let bad = [
//   "two times three is not four".split(" "),
//   "two times two is four".split(" ")
// ];
// let good = [
//   "give me one grand today night".split(" "),
//   "give one grand today".split(" ")
// ];

// checkMagazine(bad[0], bad[1]);
// console.log("----");
// checkMagazine(good[0], good[0]);

// function arrayManipulation(n, queries) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(0);
//   }
//   let max = 0;

//   queries.forEach(e => {
//     for (let i = e[0] - 1; i < e[1]; i++) {
//       arr[i] += e[2];
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//   });

//   return max;
// }

// let input = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]];
// console.log(arrayManipulation(10, input));

// function minimumSwaps(q) {
//   let moves = 0;
//   let i = 0;
//   let stillMixed = true;
//   while (i < q.length) {
//     if (q[i] !== i + 1) {
//       let left = q[i];
//       let right = q[left - 1];

//       q[i] = right;
//       q[left - 1] = left;
//       moves++;
//     } else {
//       i++;
//     }
//   }

//   return moves;
// }
// let testData =
//   "8 45 35 84 79 12 74 92 81 82 61 32 36 1 65 44 89 40 28 20 97 90 22 87 48 26 56 18 49 71 23 34 59 54 14 16 19 76 83 95 31 30 69 7 9 60 66 25 52 5 37 27 63 80 24 42 3 50 6 11 64 10 96 47 38 57 2 88 100 4 78 85 21 29 75 94 43 77 33 86 98 68 73 72 13 91 70 41 17 15 67 93 62 39 53 51 55 58 99 46";

// let testArr = testData.split(" ").map(s => parseInt(s));
// console.log(minimumSwaps([4, 1, 3, 2]), 2);
// console.log(minimumSwaps(testArr), 91);

// function minimumBribes(q) {
//   let moves = 0;
//   let i = 0;
//   while (i < q.length) {
//     if (q[i] > i + 3) {
//       console.log("Too Chaotic");
//       return;
//     }

//     if (q[i] > i + 1 && q[i] > q[i + 1]) {
//       let left = q[i];
//       let right = q[i + 1];
//       q[i] = right;
//       q[i + 1] = left;
//       moves++;
//       i--;
//     } else {
//       i++;
//     }
//   }

//   console.log(moves);
// }
// console.log(minimumBribes([2, 3, 5, 1, 7, 8, 6, 9, 4]), 10);
// console.log(minimumBribes([2, 3, 5, 1, 7, 8, 6, 4, 9]), 9);
// console.log(minimumBribes([2, 3, 5, 1, 7, 8, 4, 6]), 8);
// console.log(minimumBribes([2, 1, 5, 3, 7, 8, 6, 4]), 8);
// console.log(minimumBribes([2, 1, 5, 3, 7, 8, 4, 6]), 7);
// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]), 7);
// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 4, 6]), 6);
// console.log(minimumBribes([1, 2, 3, 5, 7, 8, 6, 4]), 6);
// console.log(minimumBribes([1, 2, 3, 5, 7, 8, 4, 6]), 5);
// console.log(minimumBribes([1, 2, 3, 5, 7, 4, 8, 6]), 4);

// console.log(minimumBribes([1, 2, 3, 4]), 0);
// console.log(minimumBribes([1, 2, 4, 3]), 1);
// console.log(minimumBribes([1, 4, 2, 3]), 2);
// console.log(minimumBribes([1, 4, 3, 2]), 3);
// console.log("");
// console.log(minimumBribes([1, 2, 3, 4]), 0);
// console.log(minimumBribes([1, 3, 2, 4]), 1);
// console.log(minimumBribes([3, 1, 2, 4]), 2);
// console.log(minimumBribes([3, 2, 1, 4]), 3);
// console.log(minimumBribes([3, 2, 4, 1]), 4);
// console.log(minimumBribes([3, 4, 2, 1]), 5);

// function sumSingleHourGlass(arr, i, j) {
//   let top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
//   let middle = arr[i + 1][j + 1];
//   let bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

//   return top + middle + bottom;
// }

// function hourglassSum(arr) {
//   // Find sum of a single hourglass
//   // Cycle through Rows Saving the highest sum
//   let highestSum;
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = 0; j < arr[i].length - 2; j++) {
//       let sum = sumSingleHourGlass(arr, i, j);
//       if (highestSum === undefined || highestSum < sum) {
//         highestSum = sum;
//       }
//     }
//   }
//   return highestSum;
// }

// console.log(
//   hourglassSum([
//     [-1, 1, -1, 0, 0, 0],
//     [0, -1, 0, 0, 0, 0],
//     [-1, -1, -1, 0, 0, 0],
//     [0, -9, 2, -4, -4, 0],
//     [-7, 0, 0, -2, 0, 0],
//     [0, 0, -1, -2, -4, 0]
//   ])
// );

// function repeatedString(s, n) {
//   let aCount = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "a") {
//       aCount++;
//     }
//   }
//   let fullLoops = Math.floor(n / s.length);
//   let aFromLoops = Math.floor(fullLoops * aCount);
//   for (let i = 0; i < n % s.length; i++) {
//     console.log(n % s.length);
//     if (s[i] === "a") {
//       console.log("BOOP");
//       aFromLoops++;
//     }
//   }
//   return aFromLoops;
// }

// console.log(
//   repeatedString(
//     "epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq",
//     549382313570
//   )
// );
// console.log(16481469408);
