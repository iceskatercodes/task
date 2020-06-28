//Find the name with max characters and return the name
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
   
  var max = Math.max(...arr)
  function findAllIndexOf(target, needle) {
    return [].concat(...(function*(){
      for (var i = 0; i < target.length; i++) if (target[i] === needle) yield [i];
    })());
  }
  
 let arr2=(findAllIndexOf(arr, max));
 
 for(j=0;j<arr2.length;j++)
 {
     console.log(friends[arr2[j]])
 }