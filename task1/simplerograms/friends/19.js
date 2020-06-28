//Find the average in the array below.Make sure you add only the numbers and do avg.

const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
let arr =[]
for(i=0;i<friendsInfo.length;i++)
{
    if(typeof(friendsInfo[i])=="number")
    {
        arr.push(friendsInfo[i])
    }
}
let sum=0
 for(j =0;j<arr.length;j++)
 {
     sum +=arr[j]
 }
 console.log(sum,sum/arr.length)