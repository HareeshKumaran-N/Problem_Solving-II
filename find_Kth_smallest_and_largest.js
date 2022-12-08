/*
 
 >>  Sort the Array
 >>  Create an empty object
 >>  push the first kth value as smallest value to object , the first kth value index is (k-1);
 >>  push the largest kth value as largest value to object , the largest kth value index is (arr.length-k); 
 >>  return obj
*/

function findKthSmallestAndLargest(arr, k) {
  let result = {};
//   arr.sort();


    //bubble sorting

    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }

    //End of bubble sorting 
console.log(arr);
  let smallindex = largestindex = 0;

  smallindex = k - 1;
  largestindex = arr.length - k;

  result.smallest = arr[smallindex];
  result.largest = arr[largestindex];

  return result;
}

let arr = [2, -1, 4, 3, 6, 5, 7];
console.log(findKthSmallestAndLargest(arr, 3));
