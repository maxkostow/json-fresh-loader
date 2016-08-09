# json fresh loader for webpack

## Installation

`npm install --save json-fresh-loader`

## Usage

``` javascript
var json = require("json-fresh!./file.json");
// => returns file.json content as json parsed object
assert(require("json-fresh!./file.json") !== require("json-fresh!./file.json"))
// => different instances
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
