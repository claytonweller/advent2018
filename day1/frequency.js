let useFile = require("../useFile");

const importData = data => {
  let string = data.toString();
  let strArr = string.split("\r\n");
  let intArr = strArr.map(str => parseInt(str));
  let freq = 0;
  let freqReached = [];
  let i = 0;
  while (true) {
    if (freqReached.includes(freq)) {
      console.log("boop", freq);
      return;
    }
    console.log(freq);
    freqReached[i] = freq;
    freq += intArr[i % intArr.length];
    i++;
  }
};

useFile(importData, "./freqData.txt");
