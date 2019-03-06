var musicians = ["John", "Paul", "George", "Ringo"]; //declare arrays

var instruments = ["Guitar", "Guitar", "Bass", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = []; //create array 
  for (let i=0; i<musicians.length; i++) { 
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

var facts = [];

