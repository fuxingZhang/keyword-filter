'use strict';

const assert = require('assert');
const WordFilter = require('../index');
const path = require('path');

describe('#indexOf()', function () {
  const content = '测试-兼职';
  const dir = path.join(__dirname, '../keywords');
  const wordFilter = new WordFilter(dir);
  const result = '测试-**';

  it('filter should ok', () => {
    assert(result === wordFilter.filter(content));
  });
});