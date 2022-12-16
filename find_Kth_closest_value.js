function findClosest(arr,elem)
{
    let closest=arr[0];

    for(let i=1;i<arr.length;i++)
    {
           if(Math.abs(elem-closest)>Math.abs(elem-arr[i]))
           {
                closest=arr[i];
           }
           else if(Math.abs(elem-closest)===Math.abs(elem-arr[i]))// assigning the smallest value as closest one.
           {
                 closest=(arr[i]<closest)?arr[i]:closest;  
           }
    }

    return closest;
}
console.log(findClosest([2,6,3,4,7,8,12],5));