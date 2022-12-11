const repeatString = (string, num) => {
    let repeatString = '';
    while(num > 0){
        repeatString += string;
        num--;
            
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
