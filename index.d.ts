// Type definitions

declare class WordFilter {
  /**
   * Sensitive word filter
   * 
   * Options:
   *   - `dir` Optional, the folder where the keyword files are located
   */
  constructor(dir?: string);

  /**
   * Filter keyword method
   * 
   *  `text` Text to filter
   */
  filter(text: string): void;
}

export = WordFilter