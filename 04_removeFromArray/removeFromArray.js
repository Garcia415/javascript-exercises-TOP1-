const removeFromArray = function(arr, string) {
    let i = 0;
    while(i < arr.length){
        if(arr[i] === string){
            arr.splice(i, 1)
        }else{
            i++;
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
