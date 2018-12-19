let useFile = require("../useFile");

const importData = data => {
  let string = data.toString();
  let strArr = string.split("\r\n");
  let objArr = createObjArr(strArr);
  let cutsArr = proposeCuts(objArr);
  printOverlap(cutsArr);
  printPerfectCut(objArr, cutsArr);
};

function printPerfectCut(objArr, cutsArr) {
  let perfectCut = objArr.filter((obj, index) => {
    for (let i = obj.top; i < obj.height + obj.top; i++) {
      for (let j = obj.left; j < obj.width + obj.left; j++) {
        if (cutsArr[i][j] > 1) {
          return false;
        }
      }
    }
    obj.index = index + 1;
    return true;
  });
  console.log(perfectCut);
}

function printOverlap(cutsArr) {
  let overlapArea = 0;
  for (let i = 0; i < cutsArr.length; i++) {
    for (let j = 0; j < cutsArr[i].length; j++) {
      if (cutsArr[i][j] > 1) {
        overlapArea++;
      }
    }
  }
  console.log("overlap", overlapArea);
}

function proposeCuts(objArr) {
  let base = createBase(1000);
  objArr.forEach(obj => {
    for (let i = obj.top; i < obj.height + obj.top; i++) {
      for (let j = obj.left; j < obj.width + obj.left; j++) {
        base[i][j]++;
      }
    }
  });
  return base;
}

function createBase(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push([]);
    for (let j = 0; j < size; j++) {
      arr[i].push(0);
    }
  }
  return arr;
}

function createObjArr(strArr) {
  let objArr = strArr
    .map(str => str.split(" "))
    .map(arr => [arr[2].split(","), arr[3].split("x")])
    .map(arr => {
      return {
        left: parseInt(arr[0][0]),
        top: parseInt(arr[0][1]),
        width: parseInt(arr[1][0]),
        height: parseInt(arr[1][1])
      };
    });
  return objArr;
}

useFile(importData, "./fabricData.txt");
