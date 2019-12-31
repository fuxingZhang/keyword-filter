'use strict';

const fs = require('fs');
const path = require('path');
const Mint = require('mint-filter').default;

class WordFilter {
  #mint;

  /**
   * @constructor
   * @param {String} [dir] Optional, the folder where the keyword files are located
   */
  constructor(dir = path.join(__dirname, './keywords')) {
    const words = [];
    const names = fs.readdirSync(dir);

    for (let name of names) {
      const filePath = path.join(dir, name);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) continue;
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