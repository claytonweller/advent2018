let useFile = require("../useFile");

const importData = data => {
  let string = data.toString();
  let strArr = string.split("\r\n");
  let objArr = createObjectArray(strArr);
  // checksum(objArr);

  let nearMatch = checkForNearMatches(strArr);
  let match =
    nearMatch.str.slice(0, nearMatch.difference) +
    nearMatch.str.slice(nearMatch.difference + 1);
  console.log(match);
};

function checkForNearMatches(strArr) {
  for (let i = 0; i < strArr.length; i++) {
    for (let j = i + 1; j < strArr.length; j++) {
      let comparison = compareStrings(strArr[i], strArr[j]);
      if (comparison.nearMatch) {
        return { difference: comparison.differences[0], str: strArr[i] };
      }
    }
  }
}

function compareStrings(str1, str2) {
  let differences = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      differences.push(i);
    }
    if (differences.length > 1) {
      return { nearMatch: false, differences };
    }
  }
  return { nearMatch: true, differences };
}

function createObjectArray(strArr) {
  let objArr = strArr.map(str => {
    let obj = { str, two: false, three: false };
    for (let i = 0; i < str.length; i++) {
      if (!obj[str[i]]) {
        obj[str[i]] = 0;
      }
      obj[str[i]]++;
    }
    if (Object.keys(obj).filter(key => obj[key] === 3).length) {
      obj.three = true;
    }
    if (Object.keys(obj).filter(key => obj[key] === 2).length) {
      obj.two = true;
    }

    return obj;
  });
  return objArr;
}

function checksum(objArr) {
  let threeCount = objArr.filter(obj => obj.three).length;
  let twoCount = objArr.filter(obj => obj.two).length;
  console.log(threeCount, twoCount);
  console.log(threeCount * twoCount);
}

useFile(importData, "./checksumData.txt");
