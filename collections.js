function arrToSet(arr) {
    var set = new Set(arr);
    return set
}

function arrToStr(arr) {
    return arr.join('')
}

function setToArr(set) {
    return Array.from(set)
}

function setToStr(set) {
    return Array.from(set).join('')
}

function strToArr(str) {
    return str.split("")
}

function strToSet(str) {
    var set = new Set(str);
    return set
}

function mapToObj(map) {
    return Object.fromEntries(map)
}

function objToArr(obj) {
    return Object.values(obj)
}

function objToMap(obj) {
    return new Map(Object.entries(obj))
}

function arrToObj(arr) {
    return Object.assign({}, arr)
}

function strToObj(str) {
    return Object.assign({}, str.split(''))
}

function superTypeOf(value) {
    if (value === null) {
        return 'null'
    }
    if (value === undefined) {
        return 'undefined'
    }
    return value.constructor.name
}

