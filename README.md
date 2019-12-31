# keyword-filter
Sensitive word filter

Node.js 12+ required (Because of use Class private fields)

## Install

```sh
$ npm i @zhangfuxing/keyword-filter
```  

## Useage  

```js
const assert = require('assert');
const WordFilter = require('@zhangfuxing/keyword-filter');
const dir = './keywords';
const text = '测试-兼职';
const wordFilter = new WordFilter(dir);
const result = '测试-**';
assert(result === wordFilter.filter(text));
```  

## Test

```sh
$ npm test
```  