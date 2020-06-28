// Add Mr or Ms to the names in the friends array.

const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
var arr =[]
for(i=0;i<friends.length;i++)
{
    if(i%2 ==0)
    {
        arr.push("Mr "+friends[i])
    }
    else
    {
        arr.push("Mrs "+friends[i])
    }
}
console.log(arr)