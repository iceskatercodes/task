//Print the contents of the input variable
var input = [
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
//Your code goes here
console.log(input[i])
for(j=0;j<input[i].length;j++)
{
    console.log(input[i][j])
}
}
}
dataHandling(input);