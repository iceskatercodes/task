//Find the avg length of all the friends names. Get the individual length of the names and do the avg.
var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",

    "AAK chandran"
    ];
    var arr =[]
    var count =0
    for(i=0;i<friends.length;i++)
    {
        arr.push(friends[i].length)
    }
    console.log(arr)
    for(i=0;i<friends.length;i++)
    {
       count +=arr[i]
    }
    console.log(count)