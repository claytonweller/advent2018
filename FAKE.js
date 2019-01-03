const challenge = require("challenge.js");
function runCodingChalenge(chal) {
  if (chal === "Fizz Buzz") {
    return "Seriously...?";
  } else if (chal === "literally anything else") {
    return "LET'S DO THIS!";
  } else {
    throw "unsupported format";
  }
}
runCodingChalenge(challenge);
