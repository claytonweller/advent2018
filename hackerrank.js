function arrayManipulation(n, queries) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(0);
  }
  let max = 0;

  queries.forEach(e => {
    for (let i = e[0] - 1; i < e[1]; i++) {
      arr[i] += e[2];
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  });

  return max;
}

let input = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]];
console.log(arrayManipulation(10, input));

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
