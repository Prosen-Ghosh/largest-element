# largest-element
A JavaScript Package for finding the largest element of an array.

![npm](https://img.shields.io/npm/v/largest-element.svg) ![license](https://img.shields.io/npm/l/largest-element.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/largest-element.svg)  


![nodei.co](https://nodei.co/npm/largest-element.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/largest-element.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/largest-element.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/largest-element.svg)


## Features


## `npm` Install

`npm install --save largest-element`

## Script Tag

#### For Development
```js
<script src=""></script>
```

#### For Production
```js
<script src=""></script>
```

## Usage

```js

const large = require('./largest');

large([1,2,10,1,2,3,{},[]]);
//=> 10

large([1,2,10,1,2,3,{}]);
//=> 10
large([1,2,101,10,2,3]);
//=> 101

large([]);
//=> null

large([1]);
//=> 1

large([-11,-1]);
//=> -1

large(); // without parameter this function will return a type error
//=> TypeError: largest() expects an array parameter


```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT**
