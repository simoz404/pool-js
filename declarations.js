const escapeStr = `\`\\/"'`
const arr = [4, '2']
const obj = {
    str : "",
    num : 0,
    bool : true,
    undef : undefined,
}

const nested = {
    arr : Object.freeze([4, undefined, '2']),
    obj : Object.freeze({
        str : "",
        num : 0,
        bool : true,
    })
}

Object.freeze(nested)