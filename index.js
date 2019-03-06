var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]; //declare arrays

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = []; //create array 
  for (let i=0; i<musicians.length; i++) { 
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

