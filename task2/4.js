// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var arr = []
for (var i = 0; i <=10; i++) {
    if(numsArr[i] %2 == 0 )
    {
    arr.push("even")
    }
    else{
        arr.push(numsArr[i])
    }
   }
   console.log(arr);