/*
 
 >>  Sort the Array
 >>  Create an empty object
 >>  push the first kth value as smallest value to object , the first kth value index is (k-1);
 >>  push the largest kth value as largest value to object , the largest kth value index is (arr.length-k); 
 >>  return obj
*/

function findKthSmallestAndLargest(arr, k) {
  let result = {};
  arr.sort();

  let smallindex = largestindex = 0;

  smallindex = k - 1;
  largestindex = arr.length - k;

  result.smallest = arr[smallindex];
  result.largest = arr[largestindex];

  return result;
}

let arr = [2, -1, 4, 3, 6, 5, 7];
console.log(findKthSmallestAndLargest(arr, 3));
