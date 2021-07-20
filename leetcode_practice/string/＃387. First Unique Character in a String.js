var firstUniqChar = function(s) {
  const letterStore = {}
  for(const letter of s){
      if(letterStore[letter]) letterStore[letter]++
      else letterStore[letter] = 1
  }
  for(let i=0;i<s.length;i++){
      const stringLetter = s[i]
      if(letterStore[stringLetter] === 1) return i
  }
  return -1
};