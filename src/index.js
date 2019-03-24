module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let temp;

    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < bracketsConfig.length; j++){
            if (str[i] === bracketsConfig[j][0]) stack.push(i);
            else temp = stack.pop(i);
            if (temp === str[i+1]) return false;
            else return true;
        }
    }

}