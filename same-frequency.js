"use strict";

/**
 * make num a string and make map out of the string
 *
 */
function sameFrequency(num1, num2) {
  const str1 = getFrequencyCounter(num1.toString());
  const str2 = getFrequencyCounter(num2.toString());

  for (let char in str1) {
    if (str2[char] < str1[char]) {
      return false;
    }
  }

  return true;

}


/** takes in a num of characters and returns a frequency object
 * O(n)
 */

function getFrequencyCounter(items) {

  const freqs = new Map();

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}

