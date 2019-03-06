var musicians = ["John", "Paul", "George", "Ringo"];

var instruments = ["Guitar", "Guitar", "Bass", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[0]} plays ${instruments}`)
  }
}