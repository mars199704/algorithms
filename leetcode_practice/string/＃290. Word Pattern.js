var wordPattern = function(pattern, s) {
    const patternArr = pattern.split("")
    const str = s.split(" ")
    if(patternArr.length !== str.length)  return false
    let obj = {}
    let arr = []
    for(let i=0;i<patternArr.length;i++){
        if(!obj[patternArr[i]] && arr.indexOf(str[i]) == -1){
            obj[patternArr[i]] = str[i]
            arr.push(str[i])
        }else{
            if(str[i] !== obj[patternArr[i]]) return false
        }
    }
    return true
};