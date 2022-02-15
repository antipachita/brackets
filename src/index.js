module.exports = function check(str, bracketsConfig) {
    let strLength = str.length;
    let bracketLen = bracketsConfig.length;
    if (str.length % 2 > 0) {
      return false;
     }
    let arrayStr=str.split('');
     console.log(arrayStr)
    for (let i=0;i<arrayStr.length;i++){
     for (let n=0;n<bracketLen;n++){
                if (arrayStr[i]===bracketsConfig[n][0] && arrayStr[i+1]===bracketsConfig[n][1]){
                    arrayStr.splice(i,2);
                  console.log(arrayStr)
                    i =- 1;
                    break;
                }
        }
    }
    if (arrayStr.length===0) {
    return true;
    } else  {
      return false;
    }
}

