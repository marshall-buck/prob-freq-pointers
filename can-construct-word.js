"use strict";
/**
 *  Make a freq counter for both inputs
 *  if freq of chars in letters is less than  to freq
 * of chars in word then its false otherwise true,
 *
 * note: if word has no chars, its true
 *
 Constraints: time complexity: O(w + k)
 (if w is the length of word and k is the length of letters)
 */

/**
 *
 * accepts two strings, words and letters and returns true if
 * word can be built from letters, otherwise returns false
 */

function canConstructWord(word, letters) {
  // word > letters
  if (letters.length === 0) return false;
  const wordFreq = getFrequencyCounter(word);
  const lettersFreq = getFrequencyCounter(letters);

  for (let char in wordFreq) {
    if (lettersFreq[char] < wordFreq[char]) {
      return false;
    }
  }


  return true;


}

/** takes in a string of characters and returns a frequency object
 * O(n)
 */

function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}
