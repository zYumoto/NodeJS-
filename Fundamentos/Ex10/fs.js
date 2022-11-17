const fs = require("fs");
//lendo diretorios
const files = fs.readdirSync(__dirname);

files.forEach((f) => console.log(f));