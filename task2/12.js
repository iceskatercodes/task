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
var arr1 = arr.reverse()
var str = arr1.toString()
var strt = str.split(",").join(" ")
console.log(strt.trim())