var Scrabble = function() {};

Scrabble.prototype.score = function(word) {
  var total = 0;
  var lookup = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  }
  word = word.toUpperCase();
  for (var i = 0; i < word.length; i++) {
    score = lookup[word[i]];
    total += score;
  }

  return total;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  //call score function on each word in arrayOfWords
  var self = this;
  var scores = arrayOfWords.map(function(word) {
    return self.score(word);
  })
  //find maximum score
  var max_score = Math.max.apply(null, scores);

// make array of words with max score
  var top_words = [];
  for (var i = 0; i < arrayOfWords.length; i++) {
    if (scores[i] == max_score) {
      top_words.push(arrayOfWords[i]);
    }
  }



  // if only one, return it
  if (top_words.length == 1) {
    return top_words[0];
  };



  // if more than one:
  // if there is at least one 7-letter word, return first
  // else find the minimum length and return the first word of that length


};

module.exports = Scrabble;

var scrab = new Scrabble;
console.log(scrab.score('tubrun'));
console.log(scrab.score('bubba'));
console.log(scrab.score('quixote'));
console.log(scrab.highestScoreFrom(['tubrun', 'bubba', 'quixote']));
