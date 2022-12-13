
/*
   Algorithm

   Matrix rotate 90Deg.
   >> Transpose the matrix .
   >> swap the element like first to last element.
*/

function Rotate(arr) {
  // console.log(arr); actual array

  //transposing

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[i].length; j++) {
      if (i !== j) {
        let temp = arr[j][i];
        arr[j][i] = arr[i][j];
        arr[i][j] = temp;
      }
    }
  }

  // console.log(arr);

  //swapping the elements
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length / 2 /*column value*/; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[i][arr[i].length - j - 1];
      arr[i][arr[i].length - j - 1] = temp;
    }
  }

  return arr;
}

console.log(
  "RotatedMatrix",
  Rotate([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
