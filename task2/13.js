// Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var arr =[]
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 arr.push(inner_array[j])
}
}
var sum_odd=0;
var sum_even=0; 
for(i=0;i<arr.length;i++)
{
    if(arr[i]%2!=0)
    {
    sum_odd += arr[i]
    }
    else
    {
    sum_even += arr[i]
    }
}
console.log(sum_odd);
console.log(sum_even);