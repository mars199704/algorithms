var reverseString = function(s) {
  for(var i = 0, max = (s.length-1)/2 ; i < max   ; i++){
      var temp = s[i];
      s[i] = s[s.length - 1 - i];
      s[s.length - 1 - i] = temp;
  }
  return s
};