// add whatever parameters you deem necessary & write docstring
/**
 * Checking if two numbers average in array nums is equal to
 * the target average
 * avg = (num1 + num2) / 2
 */

/**
 *
 * if the array is empty return false
 * return false if there is no pair that equals average
 *  return true at first pair that equals average
 *
 * calculate the averages for each number, if not continue checking
 * until all numbers have been checked
 */
function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length-1;

  while(left < right){
    const avg = (nums[left] + nums[right]) / 2;

    if(avg === targetAvg){
      return true;
    } else if(avg > targetAvg){
      right--;
    } else{
      left++;
    }
  }

  return false;
}

