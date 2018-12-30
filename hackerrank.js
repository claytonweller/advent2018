function minimumBribes(q) {
  let arr = q.map((val, i) => val - (i + 1));
  let sum = 0;
  arr.forEach(element => {
    sum += Math.abs(element / 2);
  });
  // console.log(q);
  // console.log(q[q.length - 2], q[q.length - 1]);
  // if (q[q.length - 2] > q[q.length - 1]) {
  //   sum += 1;
  // }
  console.log(arr);
  return sum;
}
console.log(minimumBribes([2, 3, 5, 1, 7, 8, 6, 9, 4]), 10);
console.log(minimumBribes([2, 3, 5, 1, 7, 8, 6, 4, 9]), 9);
console.log(minimumBribes([2, 3, 5, 1, 7, 8, 4, 6]), 8);
console.log(minimumBribes([2, 1, 5, 3, 7, 8, 6, 4]), 8);
console.log(minimumBribes([2, 1, 5, 3, 7, 8, 4, 6]), 7);
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]), 7);
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 4, 6]), 6);
console.log(minimumBribes([1, 2, 3, 5, 7, 8, 6, 4]), 6);
console.log(minimumBribes([1, 2, 3, 5, 7, 8, 4, 6]), 5);
console.log(minimumBribes([1, 2, 3, 5, 7, 4, 8, 6]), 4);

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
