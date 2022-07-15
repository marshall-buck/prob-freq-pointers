"use strict"

// add whatever parameters you deem necessary & write docstring
/**
 * takes two arrays, one of keys and one of values
 * returns an object of the keys and values
 */

/**
 *check if keys.length is longer than values.length
 * if longer, push null
 * iterate through keys and add to object
 */
function twoArrayObject(keys, values) {
  let obj = {};

  if(keys.length > values.length){
    for(let i = values.length - 1; i < keys.length; i++){
      values.push(null);
    }
  }

  for(let key of keys){
    obj[key] = values.shift();
  }

  return obj;

}
