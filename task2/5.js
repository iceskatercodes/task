// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var arr = []
for (var i = 0; i <=10; i++) {
    if(numsArr[i] %2 == 0 )
    {
    arr.push(numsArr[i])
    }
    else{
        arr.push("even")
    }
   }
   console.log(arr);