let useFile = require("../useFile");

const importData = data => {
  let string = data.toString();
  let strArr = string.split("\r\n");
  let objArr = createObjArr(strArr);
  let guardSchedules = compileguardSchedules(objArr);
};

function compileguardSchedules(objArr) {
  let guardSchedules = { "#": [{ sleep: 0, wake: 0 }] };
  let currentguard = "#";
  objArr.forEach(entry => {
    if (entry.status !== "up" && entry.status !== "asleep") {
      currentguard = entry.status;
      if (!guardSchedules[currentguard]) {
        guardSchedules[currentguard] = [{ wake: 00 }];
      }
    }
    let guardArr = guardSchedules[currentguard];
    if (entry.status === "asleep") {
      guardArr[guardArr.length - 1].sleep = guardArr[guardArr.length].wake =
        entry.min;
    } else if ((entry.status = "up")) {
      guardArr[guardArr.length - 1].wake = guardArr[guardArr.length].sleep =
        entry.min;
    }
  });
  console.log(guardSchedules);
}

function createObjArr(strArr) {
  let spaceSplit = strArr.map(str => str.split(" "));
  let miscSplit = spaceSplit.map(arr => {
    return [...arr[0].split("-"), ...arr[1].split(":"), arr[3]];
  });
  let formatArr = miscSplit.map(arr => {
    return {
      tStamp: arr[0].slice(1) + arr[1] + arr[2] + arr[3] + arr[4].slice(0, 1),
      year: parseInt(arr[0].slice(1)),
      month: parseInt(arr[1]),
      day: parseInt(arr[2]),
      hour: parseInt(arr[3]),
      min: parseInt(arr[4].slice(0, 1)),
      status: arr[5]
    };
  });
  return formatArr.sort((a, b) => b.tStamp - a.tStamp);
}

useFile(importData, "./guardsData.txt");
