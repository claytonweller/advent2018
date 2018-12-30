let useFile = require("../useFile");

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const importData = data => {
  let string = data.toString();
  let obliteratedString = obliteratePairs(string);
  console.log(string.length, obliteratedString.length);
  printTheBestCharacter(string);
  let test = "aaAaAAbaCaaBBVVBV";

  console.log(test.replace(new RegExp("a", "g"), ""));
};

function printTheBestCharacter(string) {
  let theCounts = alphabet.map(letter => {
    let removedLowerLetter = string.replace(new RegExp(letter, "g"), "");
    let removeAllOfLetter = removedLowerLetter.replace(
      new RegExp(letter.toLocaleUpperCase(), "g"),
      ""
    );
    return {
      stringLength: obliteratePairs(removeAllOfLetter).length,
      letter
    };
  });
  theCounts.sort((a, b) => a.stringLength - b.stringLength);
  console.log(theCounts);
}

function obliteratePairs(string) {
  let i = 0;
  while (i < string.length - 1) {
    if (canObliterate(string[i], string[i + 1])) {
      string = snipPair(string, i);
      if (i > 0) {
        i--;
      }
    } else {
      i++;
    }
  }
  return string;
}

function snipPair(string, index) {
  let snipped = string.slice(0, index) + string.slice(index + 2);
  return snipped;
}

function canObliterate(char1, char2) {
  if (char1.toLowerCase() === char2.toLowerCase() && char1 !== char2) {
    return true;
  }
  return false;
}

useFile(importData, "./polymer.txt");
