//3 write a code to count the elements in the array . Don’t use length property

var myarray = [11, 22, 33, 44, 55]

let result = myarray.reduce((count, current) => count + 1)
console.log(result+1 - myarray[0])