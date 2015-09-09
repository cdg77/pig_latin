var pigLatinize = function(string){

  if (string.startsWith("a"||"e"||"o"||"u"||"i", 0)) {
    var pigString = string.concat("ay");
    return pigString;
  } else {

    var stringArray = string.split('');
    var firstLetterShifted = stringArray.shift();

     stringArray.push(firstLetterShifted);
    var pigString = stringArray.join('').concat('ay');
    return pigString;
  }
}
