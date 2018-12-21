let useFile = require("../useFile");

const importData = data => {
  let string = data.toString();
  let strArr = string.split("\r\n");
  let objArr = createObjArr(strArr);
  let guardSchedules = compileguardSchedules(objArr);

  let sleepyGuardsArr = Object.keys(guardSchedules).map(key => {
    return {
      key,
      minuteObj: whenIsTheGuardSleepiest(guardSchedules[key], key)
    };
  });
  printMostConsistentSleeper(sleepyGuardsArr);
  printSleepiestGuard(guardSchedules);
};

function printMostConsistentSleeper(sleepyGuardsArr) {
  sleepyGuardsArr.sort((a, b) => b.minuteObj.frequency - a.minuteObj.frequency);
  let consistentSleeper = sleepyGuardsArr[0];
  console.log(
    consistentSleeper.minuteObj.sleepiestMinute,
    parseInt(consistentSleeper.key.slice(1))
  );
  console.log(
    consistentSleeper.minuteObj.sleepiestMinute *
      parseInt(consistentSleeper.key.slice(1))
  );
}

function printSleepiestGuard(guardSchedules) {
  let guardTotals = findGuardTotals(guardSchedules);
  let sleepiestGuard = guardTotals[0].guardKey;
  let sleepiestGuardSchedule = guardSchedules[sleepiestGuard];
  let minuteObj = whenIsTheGuardSleepiest(sleepiestGuardSchedule);
  console.log(minuteObj.sleepiestMinute, parseInt(sleepiestGuard.slice(1)));
  console.log(minuteObj.sleepiestMinute * parseInt(sleepiestGuard.slice(1)));
}

function whenIsTheGuardSleepiest(guardSchedule, key) {
  let allMinutes = [];
  for (let i = 0; i < 60; i++) {
    allMinutes.push(0);
  }
  guardSchedule.forEach(obj => {
    for (let i = obj.sleep; i < obj.wake; i++) {
      allMinutes[i]++;
    }
  });
  let sleepiestMinute = 0;
  for (let i = 0; i < allMinutes.length; i++) {
    if (allMinutes[sleepiestMinute] < allMinutes[i]) {
      sleepiestMinute = i;
    }
  }
  // console.log(allMinutes[sleepiestMinute], key);
  return { sleepiestMinute, frequency: allMinutes[sleepiestMinute] };
}

function findGuardTotals(guardSchedules) {
  return Object.keys(guardSchedules)
    .map(guardKey => {
      let total = 0;
      for (let i = 0; i < guardSchedules[guardKey].length; i++) {
        total += guardSchedules[guardKey][i].duration;
      }
      return { total, guardKey };
    })
    .sort((a, b) => b.total - a.total);
}

function compileguardSchedules(objArr) {
  let guardSchedules = {};
  let currentguard = "#";
  objArr.forEach(entry => {
    if (entry.status !== "up" && entry.status !== "asleep") {
      currentguard = entry.status;
      if (!guardSchedules[currentguard]) {
        guardSchedules[currentguard] = [];
      }
    }
    let guardArr = guardSchedules[currentguard];
    // console.log(currentguard);
    if (entry.status === "asleep") {
      guardArr.push({
        date: `${entry.month}-${entry.day}`,
        sleep: entry.min
      });
    } else if (entry.status === "up") {
      // console.log(guardArr);
      let lastEntry = guardArr[guardArr.length - 1];
      lastEntry.wake = entry.min;
      lastEntry.duration = lastEntry.wake - lastEntry.sleep;
    }
  });
  return guardSchedules;
}

function createObjArr(strArr) {
  let spaceSplit = strArr.map(str => str.split(" "));
  let miscSplit = spaceSplit.map(arr => {
    return [...arr[0].split("-"), ...arr[1].split(":"), arr[3]];
  });
  let formatArr = miscSplit.map(arr => {
    return {
      tStamp: arr[0].slice(1) + arr[1] + arr[2] + arr[3] + arr[4].slice(0, 2),
      year: parseInt(arr[0].slice(1)),
      month: parseInt(arr[1]),
      day: parseInt(arr[2]),
      hour: parseInt(arr[3]),
      min: parseInt(arr[4].slice(0, 2)),
      status: arr[5]
    };
  });
  return formatArr.sort((a, b) => a.tStamp - b.tStamp);
}

useFile(importData, "./guardsData.txt");
