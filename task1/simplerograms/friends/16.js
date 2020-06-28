//Find the friends names who has letter ‘a’ and return the list.
var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "Hell",
    "AAK chandran"
    ];
    var arr =[]
    for(i=0;i<friends.length;i++)
    {
        if(friends[i].startsWith('M'))
        {
            arr.push(friends[i])
        }
    }
    console.log(arr)