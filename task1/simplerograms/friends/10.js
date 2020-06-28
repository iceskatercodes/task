//Get the first item, the middle item and the last item of the array
var arr =[1,2,3,4,5,6,7,8,9,10,11,12,13]
console.log("first item: "+arr[0])
let len = arr.length
console.log("last item: "+arr[len-1])
if(len%2==0)
{
    console.log("middle items: "+arr[len/2],arr[(len/2)+1])
}
else
{
    console.log("middle item: "+arr[Math.round(len/2)])
}