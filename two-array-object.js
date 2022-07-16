"use strict";

// add whatever parameters you deem necessary & write docstring
/**
 * takes two arrays, one of keys and one of values
 * returns an object of the keys and values, value will be null if
 * values array is larger than keys
 */

/**
 *check if keys.length is longer than values.length
 * if longer, push null
 * iterate through keys and add to object
 */
function twoArrayObject(keys, values) {
  let keysAndValuesObject
    = {};


  for (let i = 0; i < keys.length; i++) {
    if (values[i]) {
      keysAndValuesObject
      [keys[i]] = values[i];
    } else {
      keysAndValuesObject
      [keys[i]] = null;
    }

  }

  return keysAndValuesObject
    ;

}
