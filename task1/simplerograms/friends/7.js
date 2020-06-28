
//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  function dataHandling1(input) {
    for (var i = 0; i < input.length; i++) {
      if (input[i] == "CaptianAmerica") {
        break
      }
      else {
        console.log("till cap: " + input[i])
      }
    }
  }
  dataHandling1(friends);