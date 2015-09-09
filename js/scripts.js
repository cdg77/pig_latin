var pigLatinize = function(string){

  if (string.startsWith("a"||"e"||"o"||"u"||"i", 0)) {
    var pigstring = string.concat("ay");
    return pigstring;
  } else {
    return false;
    }
}
