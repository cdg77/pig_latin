var pigLatinize = function(string) {

  if (string.startsWith("a"||"e"||"o"||"u"||"i", 0)) {
    var pigString = string.concat("ay");
    return pigString;
  } else {
    var stringArray = string.split('');

    do {
      var firstLetterShifted = stringArray.shift();
      stringArray.push(firstLetterShifted);
      var firstLetter = stringArray[0];

    } while (isConsonant(firstLetter) );

    var pigString = stringArray.join('').concat('ay');
    return pigString;
  }
}

var isConsonant = function(letter) {
  var vowels = ["a","e","i","o","u"];
  if (vowels.indexOf(letter) === -1) {
    return true;
  } else {
    return false;
  }
}
