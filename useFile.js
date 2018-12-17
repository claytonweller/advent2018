const fs = require("mz/fs");

const useFile = (method, file) => {
  fs.readFile(file)
    .then(data => method(data))
    .catch(err => console.log(err));
};

module.exports = useFile;
