# sort.js
[![Build Status](https://travis-ci.org/jongha/sort.js.png?branch=master)](https://travis-ci.org/jongha/sort.js)
[![Coverage Status](https://coveralls.io/repos/jongha/sort.js/badge.png)](https://coveralls.io/r/jongha/sort.js)
[![Dependency Status](https://gemnasium.com/jongha/sort.js.png)](https://gemnasium.com/jongha/sort.js)

Sort Library for Javascript

## `Usage`

```
var arrayVal = [1,2,3,4,5];
arrayVal.bubble({ order: "desc" }); // arrayVal == [5,4,3,2,1]
arrayVal.bubble({ order: "asc" }); // arrayVal == [1,2,3,4,5]
```