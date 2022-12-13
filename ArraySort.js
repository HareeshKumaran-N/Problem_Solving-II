/*
Sort an array of 0s, 1s and 2s

input [1,2,1,1,1,0,0,0,1,2]
output [0,0,0,1,1,1,1,2,1,2]

input [1,0,1]
output [0,1,1]

input [2,0,1,2]
output [0,1,2,2]
*/

/*
Algorithm

>>By using bubble sort approach
  
    

*/

function bubbleSort(arr)
{
   for(let i=0;i<arr.length;i++)
   {
    for(let j=i+1;j<arr.length;j++)
    {
        let temp;
          if(arr[i]>arr[j])
          {
            temp=arr[i]
            arr[i]=arr[j];
            arr[j]=temp;   
          }
    }
   }

   return arr;
}

console.log(bubbleSort([2,0,1,2]));
