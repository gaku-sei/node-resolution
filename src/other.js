require(".")(); // or ./, will import ./index.js
require("./MyMath")(); // ./MyMath.js or ./MyMath/index.js if the former is not present
require("./MyMath/")(); // ./MyMath/index.js
