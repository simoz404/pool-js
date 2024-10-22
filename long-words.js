function longWords(arr) {
    return arr.every((v) => typeof(v) === 'string' && v.length >= 5)
}

function oneLongWord(arr) {
    return arr.some((v) => v.length >= 10)
}

function noLongWords(arr) {
    console.log(arr);
    return (arr.every((v) =>  v.length < 7))
}

