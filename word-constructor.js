function Word(season, length, answer) {
  this.season = season,
  this.length = length,
  this.answer = answer,

  this.displayWord = function () {
  	return this.answer;
  }


 }

 module.exports = Word;
