//2. Add your name to the end of the friends array, and add another name to beginning.
const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
friends.splice(0, 0, 'iceskater')
console.log("first Insert: "+friends)
var len = friends.length
friends.splice(len,0,"abcd")
console.log("last insert: "+friends)
