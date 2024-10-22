function adder(arr, n=0) {
    return arr.reduce((sum, num) => {return sum+num},n)
}

function sumOrMul(arr, n=0) {
    if (arr[0]%2===0 && n === 0) {
        n = 1
    }
    return arr.reduce((sum, num) => {
        if (num%2===0) {
            return sum*num
        } else {
            return sum+num
        }
    }, n)
}

function funcExec(arr, n) {
    return arr.reduce((valuereturn, funcName) => {
        return funcName(valuereturn);
    }, n);
}

console.log(sumOrMul([18, 17, 7, 13, 25], 12));
