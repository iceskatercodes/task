//Find the person is ur friend or not.
const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];

function dataHandlin(input, name) {
    for (var i = 0; i < input.length; i++) {
      if (input[i] == name) {
        return true
  
      }
  
  
    }
  }
  let found = dataHandlin(friends, "Jeff");
  console.log(found);