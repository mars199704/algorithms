// Given two version numbers, version1 and version2, compare them.

// Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

// To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

var compareVersion = function(version1, version2) {
  const array1 = version1.split(".");
  const array2 = version2.split(".");
  const max = array1.length > array2.length ? array1.length:array2.length ;

  for(let i = 0 ; i < max ; i++ ){
      
      let i1 = parseInt(array1[i])
      let i2 = parseInt(array2[i])

      i1 = array1.length < i+1 ? 0 : i1
      i2 = array2.length < i+1 ? 0 : i2    

      if(i1 > i2){
          return 1
      } 
      if(i2 > i1){
          return -1
      }
  }
  return 0
};