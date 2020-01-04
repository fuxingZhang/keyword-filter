'use strict';

const fs = require('fs');
const path = require('path');
const Mint = require('mint-filter').default;
const { getFilePathsSync } = require('@zhangfuxing/readdir');

class WordFilter {
  #mint;

  /**
   * @constructor
   * @param {String} [dir] Optional, the folder where the keyword files are located
   */
  constructor(dir = path.join(__dirname, './keywords')) {
    const words = [];
    const filePaths = getFilePathsSync(dir);

    for (const filePath of filePaths) {
      const arr = fs
        .readFileSync(filePath, "utf8")
        .split(/[\r\n]/)
        .filter(item => item);
      words.push(...arr);
    }

    this.#mint = new Mint(words);
  }

  /**
   * @param {String} text Text to filter
   */
  filter(text) {
    return this.#mint.filterSync(text).text;
  }
}

module.exports = WordFilter;