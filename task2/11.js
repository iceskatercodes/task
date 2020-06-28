// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = 0;
var arr = []
for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i]
    var arr1 = []
    for (var j = 0; j < inner_array.length; j++)
        if (inner_array[j] % 2 == 0) {
            inner_array[j] = "even"
            arr1.push(inner_array[j])
        }
        else {
            arr1.push(inner_array[j])
        }
        arr.push(arr1)
}
console.log(arr)